//     CREATING STORE...
import React,{createContext, useContext, useReducer} from "react";

//    prepearing the dataLayer...
// this stufs are necessary ......
export const StateContext = createContext();

// these code written below will wrap our app and provide dataLayer to every components...
export const StateProvider =({reducer,initialState,children})=>{
  return  <StateContext.Provider value ={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
}
// pull information from the data layer..
export const useStateValue =()=>useContext(StateContext);