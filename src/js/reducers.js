import { combineReducers } from 'redux'
import { REQUEST_POSTS, RECEIVE_POSTS, FETCH_POST } from './actions';

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
