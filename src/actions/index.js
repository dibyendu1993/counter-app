import { FORM,CHANGEVALUE, INCREMENT, DECREMENT,CHANGENAME } from "../constants";

export function changevalue(e){
    return {
        type:CHANGEVALUE,
        text: e
    }
}

export function handleSubmit(e){
    return {
        type:FORM,
        text:e
    }
}

export function changename(e){
    return {
        type:CHANGENAME,
        text: e
    }
}
export function increment(a){
    console.log(a)
    return {
        type:INCREMENT,
        index: a
    }
}
export function decrement(a){
    return {
        type:DECREMENT,
        index: a
        
    }
}
