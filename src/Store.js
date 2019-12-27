import {createStore,combineReducers,applyMiddleware } from "redux"
import InputReducer from "./Reducers/InputReducer"
import OutputReducer from "./Reducers/OutputReducer"

const Store =createStore(combineReducers({
    input:InputReducer,
    output:OutputReducer
})) 

export default Store


