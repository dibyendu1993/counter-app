import { CHANGEVALUE, CHNGNAME} from "../constants"

export function countervalReducer(state = {numcount:0,name:'',counterval:1}, action) {
    console.log(state)
    switch (action.type) {
        case CHNGNAME:
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