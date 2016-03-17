import { createAction } from 'redux-actions'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
/**
export const requestPosts = createAction(REQUEST_POSTS);
export const receivePosts = createAction(RECEIVE_POSTS);
**/

function formatData(resData) {
    if (resData.code == 0) {
        return resData.data
    } else {
        return {}
    }
}

export function requestPosts(categoryID) {
    return {
        type: REQUEST_POSTS,
        categoryID
    }
}

export function receivePosts(categoryID, data) {
    return {
        type: RECEIVE_POSTS,
        posts : formatData(data).posts
    }
}


export function fetchPosts(categoryID) {
    return dispatch => {
        dispatch(requestPosts(categoryID))
        return fetch('/api/posts.json')
            .then(response => response.json())
            .then(json => dispatch(receivePosts(categoryID, json)))
    }
}
