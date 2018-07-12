import { CHNGVAL, INCREMENT, DECREMENT,CHNGNAME } from "../constants";

export function chngval(e){
    return {
        type:CHNGVAL,
        text: e
    }
}

export function chngname(e){
    return {
        type:CHNGNAME,
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
