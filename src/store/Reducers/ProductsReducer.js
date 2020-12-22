import {
    FETCH_PRODUCTS, 
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE
} from "../Types/Type";

const inti_state={
    loading:true,
    products:[],
    filterProducts:[],
    size:"All",
    sort:""
};

const ProductsReducer=(state=inti_state,action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return{
                loading:false,
                products:action.payload ,
                filterProducts:action.payload,
            }  
        case FILTER_PRODUCTS_BY_SIZE:
            return{
                ...state,
                size:action.payload.size,
                filterProducts:action.payload.items
            }  
        case  ORDER_PRODUCTS_BY_PRICE:
            return{
                ...state,
                sort:action.payload.sort,
                filterProducts:action.payload.items
            }
               
        default:
            return state;
    }
}
export default ProductsReducer;