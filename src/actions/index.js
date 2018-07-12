import { INCREMENT, DECREMENT,CHNGNAME } from "../constants";

export function chngname(){
    return {
        type:CHNGNAME
        
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
