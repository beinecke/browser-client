import fmock from './fetchmock'
import { Random } from 'mockjs'

function wrap(data) {
    return {
        code: 0,
        msg: 'success',
        data: data
    }
}

function errorWrap(code, msg){
    return {
        code: typeof code === 'number' ? code : 1,
        msg: typeof msg === 'string' ? msg : code
    }
}

var postsList = new Array(30).fill('').map((item, index) => { return {
    id: Random.increment(),
    title: Random.ctitle(3, 20),
    digest: Random.cparagraph(3),
    categoryID: 1
}});

fmock('/api/posts.json', wrap({
    posts: postsList
}))

fmock(/\/api\/post.json/gi, wrap({
    post: postsList[Random.natural(0, postsList.length-1)]
}))
