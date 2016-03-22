import { Random } from 'mockjs'
import { assert } from 'chai'
import * as actions from '../../src/js/actions'

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

        it('receive posts', () => {
            const categoryID = 1
            const posts = [{
                id: 1,
                title: 'title',
                digest: 'digest',
                categoryID: 1
            }]
            const responseData = {
                code: 0,
                msg: 'ok',
                data: {
                    posts: posts
                }
            }
            const assertAction = {
                type: actions.RECEIVE_POSTS,
                posts
            }
            assert.deepEqual(actions.receivePosts(categoryID, responseData), assertAction)
        })
    })
})
