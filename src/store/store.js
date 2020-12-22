import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import AddressReducer from "./Reducers/AddressReducer";
import ProductsReducer from "./Reducers/ProductsReducer";

const rootReducer=combineReducers({
    addressCart:AddressReducer,
    Allproducts:ProductsReducer
})

const intiState={}


const store=createStore(rootReducer,intiState,composeWithDevTools(applyMiddleware(thunk)));



export default store;