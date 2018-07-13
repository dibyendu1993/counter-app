import {  INCREMENT, DECREMENT } from "../constants";

export function counterReducer(state = {numcount:0,name:'',counterval:1}, action) {
    console.log(state)
   // console.log(action.text)
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                numcount: state.numcount + state.counterval,
            };
        case DECREMENT:
        return {
            ...state,
            numcount: state.numcount - state.counterval,
        };
        default:
            return state;
    }
}