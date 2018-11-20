/**
 * Action creators for Example Actions
 */

import { TYPE_A, TYPE_B } from './types'

export const actionA = () => {
    return {
        type: TYPE_A
    };
};

export const actionB = (value) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(actionC(value));
        }, 2000);
    }
};

const actionC = (value) => {
    return {
        type: TYPE_B,
        payload: {
            value
        }
    };
}
