import { INCREMENT, DECREMENT,CHNGNAME } from "../constants";

export function counterReducer(state = {numcount:0,name:''}, action) {
    console.log(state.numcount)
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                numcount: state.numcount + 1,
            };
        case DECREMENT:
        return {
            ...state,
            numcount: state.numcount - 1,
        };
        default:
            return state;
    }
}