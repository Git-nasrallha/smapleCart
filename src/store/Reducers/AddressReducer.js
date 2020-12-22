import {ADD_TO_CAER,REMOVE_FROM_CART} from "../Types/Type";

const INTI_STATE={
   Address:JSON.parse(localStorage.getItem("Address") || '[]' )
}
 const AddressReducer=(state=INTI_STATE,action)=>{
    switch(action.type){
        case ADD_TO_CAER:
            return{
                Address:action.payload.cartItems
            }
        case REMOVE_FROM_CART:
            return{
                Address:action.payload.cartItems
            }
        default:{
           return state
        }
            
            
    }
}
export default AddressReducer;