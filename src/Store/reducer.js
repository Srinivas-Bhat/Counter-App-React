
// let initialState = {
//     count : 0,
// };

import { COUNTER_ADD, COUNTER_CLEAR, COUNTER_DECREMENT, COUNTER_DIVIDE, COUNTER_INCREMENT, COUNTER_MULTIPLY, COUNTER_SUBSTRACT } from "./action.types";


export const reducer = (state, action) => {
    console.log(action.type, state);

    switch(action.type) {
        case COUNTER_INCREMENT : {
            state.count+= action.payload;
            return {...state};
        }
        case COUNTER_DECREMENT : {
            state.count-= action.payload;
            return {...state};
        }

        case COUNTER_ADD : {
            state.count= state.count + action.payload;
            return {...state};
        }
        case COUNTER_SUBSTRACT : {
            state.count = state.count - action.payload;
            return {...state};
        }
        case COUNTER_MULTIPLY : {
            state.count = state.count * action.payload;
            return {...state};
        }
        case COUNTER_DIVIDE : {
            state.count = state.count / action.payload;
            return {...state};
        }
        case COUNTER_CLEAR : {
            state.count = Number(0);
            return {...state};
        }
        default: {
            return state;
        }
    }
    
};

{/*
    export const reducer = (state, action) => {

        switch(action.type) {
            case COUNTER_INCREMENT : {
                state.count+=action.payload;
                {...state}
            }
        }
    }
*/}