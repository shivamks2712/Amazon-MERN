//   initialising the initial state to an empty array[]
 export const initialState={
   basket:[]
 }

const reducer=(state, action)=>{
    if(action.type==='ON_CART_ADD'){
              // will ret initial state but with updated basket.
      return{...state, basket: [...state.basket,action.description]} 
    }
    else if(action.type==='ON_CART_REMOVE'){
        // will return the state with  all the item except one with the given id ---
        return {...state,basket: state.basket.filter(item =>item.id !==action.id)};
    }
    
    else 
    return state;
}
export default reducer;