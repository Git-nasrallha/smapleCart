import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {FetchProducts} from "../store/Actions/Action";
import Product from "./Product";

import Filter from "./Filter";
import Carts from "./Carts";



function Main(){

   const productsState= useSelector(state => state.Allproducts);
   const {filterProducts}=productsState;
   const {size}=productsState;
   const {loading}=productsState;
 
   const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(FetchProducts())
        // eslint-disable-next-line
    },[]) ; 

  
    return(
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-lg-9">
                        <Filter />
                        <hr/>
                        <div className="row">
                            {
                                loading?(<div> loading.... </div>)
                                :(
                                    filterProducts.length===0?
                                    <div className="alert alert-danger text-center"> {`No Items with ${size} size`} </div>
                                    :
                                    filterProducts.map((product)=>{
                                        return <div key={product.id} className="col-md-6 col-lg-4"> 
                                            <Product product={product} />
                                        </div>    
                                    })
                                )
                            }
                        </div>
                   
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div className="sidebar">
                           <Carts  />
                        </div>
                    </div>

                </div>

            </div>
           
        </div>
    )
}

export default  Main;