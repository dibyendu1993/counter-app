import {  INCREMENT, DECREMENT } from "../constants";
//import {countervalueReducer} from './countervalueReducer'
export function counterReducer(state = {numcount:0}, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                
                ...state,
                numcount: state.numcount + action.index,
            };
        case DECREMENT:
        return {
            ...state,
            numcount: state.numcount - action.index,
        };
        default:
            return state;
    }
}