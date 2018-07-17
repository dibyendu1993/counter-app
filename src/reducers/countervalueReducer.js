import { FORM,CHANGEVALUE, CHANGENAME} from "../constants"

export function countervalueReducer(state = {name:'', formName:'',counterval:1}, action) {
   
    switch (action.type) {
        case CHANGENAME:
        return {
            ...state,
            name: action.text,
        };
        case FORM:
       
        return {
            ...state,
            formName: action.text,
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