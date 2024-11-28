import React, { createContext, useContext, useReducer} from 'react'
import Reducer, { initialstore } from './Reducer'

const UserContext = createContext()   




const CountProvider = ({children}) => {
  
  const [store,dispatch]=useReducer(Reducer,initialstore)

  
  return (
   <UserContext.Provider value={{store,dispatch}}>
    {children}
   </UserContext.Provider>

  )
}

export const useCount =()=>{
          
  const context = useContext(UserContext)
  return context

}



export default CountProvider
