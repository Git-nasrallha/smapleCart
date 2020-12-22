import React,{useState} from "react";
import "../mainStyle/product.css";
import Fade from 'react-reveal/Fade';
import Zoom from "react-reveal/Zoom";
import  Modal from "react-modal";
import {connect} from "react-redux";
import {AddToCart} from "../store/Actions/Action";


Modal.setAppElement("#root");

function Product(props){
    const {product}=props
    const [openModal, setOpenModal] = useState(false);

    return(
        <div className="product">
            <Fade bottom cascode>
                <div className="card">
                    <img src={product.image} className="card-img-top img-fluid" alt={product.title}/>
                    <div className="card-body">
                        <a href={"#" +product.id} onClick={()=>{setOpenModal(true)}}>
                            <h5 className="card-title"> {product.title} </h5>
                        </a>
                        <div className="card-buuton">
                            <p className="card-text"> ${product.price} </p>
                            <button className="btn btn-primary" onClick={()=>props.AddToCart(product)}> Add To Cart</button>
                        </div>
                    </div>
                </div>
            </Fade>
            <Modal isOpen={openModal} onRequestClose={()=>setOpenModal(false)}>
                <Zoom bottom cascode>
                    <button className="close-button" onClick={()=>{setOpenModal(false)}}>X</button>

                    <div className="media">
                        <img src={product.image} className="mr-3" alt={product.title}/> 
                        <div className="media-body">
                            <h5 className="mt-0"> {product.title} </h5>
                            {product.discription}
                            <p>
                                <strong>AvalibalSize</strong>{"  "} 
                                {product.avalbelSize.map(s=>
                                    <span key={s}>  {"  "} 
                                        <button> {s} </button>
                                    </span> 
                                    )
                                }
                            </p>
                            <div className="card-buuton">
                                <p className="card-text"> ${product.price} </p>
                                <button className="btn btn-primary" onClick={()=>{props.addToCart(product);setOpenModal(false)}}> Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </Modal>
        </div>
        
    )
}


export default connect(null,{AddToCart}) (Product);