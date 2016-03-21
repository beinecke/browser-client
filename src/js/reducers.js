import { combineReducers } from 'redux'
import { REQUEST_POSTS, RECEIVE_POSTS, REQUEST_POST, RECEIVE_POST } from './actions';

export function posts(state = {
    isFetching: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.posts
            })
        default:
            return state
    }
}

export function post(state = {
    isFetching: false,
    post: {
    }
}, action) {
    switch (action.type) {
        case REQUEST_POST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_POST:
            return Object.assign({}, state, {
                isFetching: false,
                post: action.post
            })
        default:
            return state
    }
}
