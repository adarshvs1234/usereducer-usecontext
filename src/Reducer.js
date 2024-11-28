import React from 'react'


export const initialstore={

    name:"Apple",
    count:0
}


const Reducer = (state,action) => {

    if(action.type === "CHANGE")
        
  return {
    ...state,
    name:state.name="MANGO"
  }

  if(action.type === "COUNT")

    return{
    ...state,
    count:state.count+1
    }
}

export default Reducer
