import React from 'react'

import { useCount } from '../Countprovider'






const Counter = () => {

  
const{store,dispatch}=useCount()
    


  return (

    <div>
    
      {store.count}
            <button onClick={()=>dispatch({type:"CHANGE"})}>CHANGE</button>
            <button onClick={()=>dispatch({type:"COUNT"})}>INCREMENT</button>
           
    </div>
  )
}


export default Counter
