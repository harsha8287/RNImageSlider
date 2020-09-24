/*
* Action Creators
*
*/
import * as ActionTypes from './ActionTypes';
import Apis from '_services/Apis';

// GET
export const fetchImages = () => (dispatch) => {
    dispatch(imageLoading());
    Apis.fetch_image()
        .then((response) => {
            dispatch(imageSuccess(response.data));
        })
        .catch((error) => {
            dispatch(imageFailed(error));
        })
};

// Handle HTTP errors
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const imageLoading = () => ({
    type: ActionTypes.FETCH_IMAGE_LOADING
});

export const imageSuccess = (music) => ({
    type: ActionTypes.FETCH_IMAGE_SUCCESS,
    payload: music
});

export const imageFailed = (errmess) => ({
    type: ActionTypes.FETCH_IMAGE_ERROR,
    payload: errmess
});



