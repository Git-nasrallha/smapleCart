import React from "react";
import Fade from "react-reveal/Fade";
import "../mainStyle/carts.css";
import {connect} from "react-redux";
import {RemoveFromCart} from "../store/Actions/Action";

function Carts(props){
    const address=props.addrssCart
    return(
        <div className="carts">
            <div className="cart-header">
                {
                    address.length===0 ?<h4>Cart is Empty</h4> 
                    :<h6>You Have <strong> {address.length} </strong> Product</h6>
                }
            </div>
            <hr/>

            <div className="cart-content">
                { address.map((item)=>{
                    return(
                        <Fade key={item.id} left cascode>
                            <div  className="media">
                                <img src={item.image} className="mr-3" alt={item.title}/>
                                <div className="media-body">
                                    <h5 className="mt-0"> {item.title} </h5>
                                        {`$ ${item.price}  x ${item.count} `} 
                                    <button onClick={()=>props.RemoveFromCart(item)} className="btn btn-danger">Remove</button>
                                </div>
                            </div>
                        </Fade>
                    )
                    })
                }
            </div>
            <div className="total">
                <strong>Total:</strong> $ {props.addrssCart.reduce((total,item)=>total+parseInt(item.price),0)}
            </div>

        </div>
    )
}

function mapStateToProps(state){
    return{
        addrssCart:state.addressCart.Address,
    }
}


export default connect(mapStateToProps,{RemoveFromCart}) (Carts);