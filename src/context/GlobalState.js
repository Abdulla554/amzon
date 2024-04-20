import React, {   createContext, useContext, useReducer } from 'react'
import { initializer, reducer } from './Appreduser'
 const Global=createContext()
export default function GlobalProvider(  {children}) {
    const[state,dispatch]=useReducer(reducer,initializer)
  return (
    <div>
        <Global.Provider value={{ basket:state.basket, dispatch }} >
            {children}
        </Global.Provider>
    </div>
  )
}
export const useAuth=()=>{
 
    return useContext(Global)
}
