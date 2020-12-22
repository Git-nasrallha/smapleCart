import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
    ADD_TO_CAER,
    REMOVE_FROM_CART,
    

} from "../Types/Type";


export const FetchProducts=()=> async (dispatch)=>{
    const res= await fetch("/json/data.json");
    const data=await res.json();
    dispatch({
        type:FETCH_PRODUCTS,
        payload:data
    })
}


export const filterProductsBySize=(products,size)=>(dispatch)=>{
    dispatch({
        type:FILTER_PRODUCTS_BY_SIZE,
        payload:{
            size:size,
            items: size==="All"? products : products.filter(item=>item.avalbelSize.includes(size))
        }
    })
}

export const sortProducts=(filterProduct,sort)=>(dispatch)=>{
    const sortedProduct=filterProduct.slice();
    if(sort==="latest"){
        sortedProduct.sort((a,b)=>(
            a.id>b.id ? 1 : -1
        ))
    }else{
        sortedProduct.sort((a,b)=>(
            sort==="lowest" 
            ?a.price > b.price ? 1 : -1
            : a.price > b.price ? -1 : 1   
        ))
    }
    dispatch({
        type:ORDER_PRODUCTS_BY_PRICE,
        payload:{
            sort:sort,
            items:sortedProduct
        }
    })
    
}


export const AddToCart=(product)=>(dispatch,getState)=>{
    const cartItems=getState().addressCart.Address.slice();
    let alreadyExsist=false;
    cartItems.forEach(item => {
        if(item.id===product.id){
            alreadyExsist=true
            item.count++;
        }
    });
    if(!alreadyExsist){
        cartItems.push({...product,count:1});
    }

    dispatch({
        type:ADD_TO_CAER,
        payload:{cartItems}
    });
    localStorage.setItem("Address",JSON.stringify(cartItems));
}

export const RemoveFromCart=(product)=>(dispatch,getState)=>{
    const cartItems=getState().addressCart.Address.slice().filter((item)=>
            item.id!==product.id
        )
    dispatch({
        type:REMOVE_FROM_CART,
        payload:{cartItems}
    })
    localStorage.setItem("Address",JSON.stringify(cartItems))
}
