import mock, { sid, nid } from './fetchmock'

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

mock('/api/posts.json', wrap({
    posts: new Array(30).fill('').map((item, index) => { return {
        id: sid(),
        title: 'title' + index,
        categoryID: 1
    }})
}))
