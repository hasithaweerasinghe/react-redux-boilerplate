import { TYPE_A, TYPE_B } from '../actions/types';

const INITIAL_STATE = {
    character: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPE_A:
            return { ...state, character: 'A' };
        case TYPE_B:
            return { ...state, character: 'B' };
        default:
            return state;
    }
}
