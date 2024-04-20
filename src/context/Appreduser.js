export const initializer={
    basket:[]
}
export const reducer=(state=initializer,action)=>{
 switch(action.type){

case "ADD_TO_BASKET":
    return{
        ...state,
        basket:[...state.basket, action.item ]
        
    };
    case "REMOVE_FROM_BASKET": 
    return{
        ...state,
        
        basket : state.basket.filter((basket)=> basket.id !== action.id)
      }


    default:
    return state
    }
 
}