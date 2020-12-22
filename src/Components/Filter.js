import React from "react";
import {connect} from "react-redux";
import {filterProductsBySize,sortProducts} from "../store/Actions/Action";

function Filter(props){
    const{size,sort,filterProducts,products}=props;
    const arrSize=products.map((p)=>{
        return p.avalbelSize
    })
    const sizes=[];
    
    for (let i=0;i<arrSize.length;i++){
       const arrayItem=arrSize[i];
       const arrayCount=arrayItem.length;
        for(let j=0;j<arrayCount;j++){
            sizes.push(arrayItem[j]);
        }
    }
    
    let uniqeSizs=new Set (sizes);
    uniqeSizs=["All",...uniqeSizs];
    
   
    return(
        !filterProducts?
            <div>Loading...</div>
        :<div className="filter ">
           <div className="container d-flex justify-content-around">
                <div className="product-number">
                    <span> {filterProducts.length?filterProducts.length:"No"} </span> <strong>product</strong>
                </div>
                <div className="prpduct-order">
                    <strong>Order </strong>
                    <select  value={sort} onChange={(e)=>props.sortProducts(filterProducts,e.target.value)}>
                        <option value="latest">Latest</option>
                        <option value="highest">Hightest</option>
                        <option value="lowest">Lowest</option>
                    </select>
                </div>

                <div className="size">
                    <strong>Size </strong>
                    <select value={size} onChange={(e)=>props.filterProductsBySize(products,e.target.value)}>
                        {
                            uniqeSizs.map((item,index)=>{
                                return <option key={index}  value= {item} > {item} </option>
                            })
                        }
                    </select>
                </div>
           </div>
        </div>

    )
}
export default connect(
    (state)=>({
        size:state.Allproducts.size,
        sort :state.Allproducts.sort,
        products:state.Allproducts.products,
        filterProducts:state.Allproducts.filterProducts,
    }),
    {
        filterProductsBySize,
        sortProducts
    }
) (Filter);