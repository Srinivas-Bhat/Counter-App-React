//export const COUNTER-INCREMENT = 'COUNTER_INCREMENT';
// export const COUNTER-INCREMENT = 'COUNTER_INCREMENT';

import {COUNTER_CLEAR, COUNTER_DECREMENT, COUNTER_INCREMENT} from './action.types'
import { COUNTER_ADD, COUNTER_SUBSTRACT, COUNTER_DIVIDE, COUNTER_MULTIPLY } from './action.types';

export const add = (value) => ({type: COUNTER_INCREMENT, payload: value});
export const minus = (value) => ({type: COUNTER_DECREMENT, payload: value });


export const adds = (value) => ({type: COUNTER_ADD, payload: value});
export const substract = (value) => ({type: COUNTER_SUBSTRACT, payload: value});
export const multiply = (value) => ({type: COUNTER_MULTIPLY, payload: value});
export const divide = (value) => ({type: COUNTER_DIVIDE, payload: value});

export const clear = () => ({type: COUNTER_CLEAR});
