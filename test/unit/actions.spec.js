import { Random } from 'mockjs'
import { assert } from 'chai'
import jsdom from 'jsdom'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import nodeFetch from 'node-fetch'
import * as actions from '../../src/js/actions'
import fmock from '../mock/fetchmock'

global.Response = nodeFetch.Response
global.Request = nodeFetch.Request

let window = jsdom.jsdom().defaultView
const middlewares = [ thunk ]

function mockStore(getState, assertActions, done) {
    if (!Array.isArray(assertActions)) {
        throw new Error('assertActions should be an array of expected actions.')
    }
    if (typeof done !== 'undefined' && typeof done !== 'function') {
        throw new Error('done should either be undefined or function.')
    }

    function mockStoreWithoutMiddleware() {
        return {
            getState() {
                return typeof getState === 'function' ?
                    getState() :
                    getState
            },

            dispatch(action) {
                const assertAction = assertActions.shift()

                try {
                    assert.deepEqual(action, assertAction)
                    if (done && !assertActions.length) {
                        done()
                    }
                    return action
                } catch (e) {
                    done(e)
                }
            }
        }
    }

    const mockStoreWithMiddleware = applyMiddleware(
        ...middlewares
    )(mockStoreWithoutMiddleware)

    return mockStoreWithMiddleware()
}

describe('actions', () => {
    describe('posts', () => {
        it('request posts', () => {
            const categoryID = 1
            const assertAction = {
                type: actions.REQUEST_POSTS,
                categoryID
            }
            assert.deepEqual(actions.requestPosts(categoryID), assertAction)
        })

        it('fetch posts', (done) => {
            fmock('/api/posts.json', {
                code: 0,
                msg: 'success',
                data: {
                    posts: [
                        {
                            id: 0,
                            title: 'title',
                            digest: 'digest',
                            categoryID: 1
                        }
                    ]
                }
            })
            const assertActions = [
                {
                    type: actions.REQUEST_POSTS,
                    categoryID: 1
                },
                {
                    type: actions.RECEIVE_POSTS,
                    posts: [
                        {
                            id: 0,
                            title: 'title',
                            digest: 'digest',
                            categoryID: 1
                        }
                    ]
                }
            ]
            const store = mockStore({ posts: [] }, assertActions, done)
            store.dispatch(actions.fetchPosts(1))
        })
    })
})
