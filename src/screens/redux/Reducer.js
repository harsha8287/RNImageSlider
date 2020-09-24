/*
* Reducer
* Reducer file returns state.
*
*/
import * as ActionTypes from './ActionTypes';

const initialState = {
    isLoading: true,
    errMess: '',
    image: []
}

export const images = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_IMAGE_SUCCESS:
            return { ...state, isLoading: false, errMess: null, image: action.payload };

        case ActionTypes.FETCH_IMAGE_LOADING:
            return { ...state, isLoading: true, errMess: null, image: [] }

        case ActionTypes.FETCH_IMAGE_ERROR:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};