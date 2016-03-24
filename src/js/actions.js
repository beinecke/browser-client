import { createAction } from 'redux-actions'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POST = 'REQUEST_POST'
export const RECEIVE_POST = 'RECEIVE_POST'
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

export function receivePosts(data) {
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
            //.then(json => dispatch(receivePosts(JSON.parse(json))))
            .then(json => dispatch(receivePosts(json)))
    }
}

export function requestPost(postID) {
    return {
        type: REQUEST_POST,
        postID
    }
}

export function receivePost(data) {
    return {
        type: RECEIVE_POST,
        post : formatData(data).post
    }
}


export function fetchPost(postID) {
    return dispatch => {
        dispatch(requestPost(postID))
        return fetch('/api/post.json?postid=' + postID )
            .then(response => response.json())
            .then(json => dispatch(receivePost(json)))
    }
}
