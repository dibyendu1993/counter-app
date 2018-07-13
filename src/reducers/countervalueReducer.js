import { CHANGEVALUE, CHANGENAME} from "../constants"

export function countervalueReducer(state = {name:'',counterval:1}, action) {
    switch (action.type) {
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