const OutputReducer=(state=[],action)=>{
    if(action.type==="ADD_INPUT"){
        return   [...state,action.payload]    
    }
    
    else if(action.type==="DEL_INPUT"){
         return state.filter(el=>el.id!==action.payload)
    }

    else if(action.type==="MODIFY_INPUT"){
        return  [...state.filter(el=>el.id!==action.payload.id),action.payload]

            
   }

    else return state


}
export default OutputReducer