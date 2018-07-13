import { CHANGEVALUE, INCREMENT, DECREMENT,CHANGENAME } from "../constants";

export function changevalue(e){
    return {
        type:CHANGEVALUE,
        text: e
    }
}

export function changename(e){
    return {
        type:CHANGENAME,
        text: e
    }
}
export function increment(){
    return {
        type:INCREMENT
        
    }
}
export function decrement(){
    return {
        type:DECREMENT
        
    }
}
