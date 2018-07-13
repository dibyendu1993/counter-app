import { CHANGEVALUE, INCREMENT, DECREMENT,CHANGENAME } from "../constants";

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
        case CHANGENAME:
        return {
            ...state,
            name: action.text,
        };
        case CHANGEVALUE:
        let temp=parseInt(action.text);
        (!temp)?temp=1:temp
        return {
            ...state,
            counterval: temp,
        };
        default:
            return state;
    }
}