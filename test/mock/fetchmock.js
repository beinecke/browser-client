let fetch0 = global.fetch

let requests = {}

export default function fmock(input, responseBody, responseStatus, responseType) {
    if (typeof input !== 'string' && !input instanceof RegExp) {
        throw new Error('The mock\'s first argument must be String or RegExp.')
    }
    if (typeof responseBody == 'undefined') {
        throw new Error('The mock\'s second argument is required.')
    }
    responseBody = JSON.stringify(responseBody)
    responseStatus = typeof responseStatus === 'number' ? responseStatus :
                    typeof responseType == 'number' ? responseType :
                    200
    responseType = typeof responseType === 'string' ? responseType : 'text/plain'
    requests[input] = {
        regexp: input instanceof RegExp ? input : false,
        body: responseBody,
        status: responseStatus,
        type: responseType
    }
}

global.fetch = (input, init) => {
    let url = input, promise, response
    if (input instanceof Request) {
        url = input.url
    }

    response = requests[url]

    if (!response) {
        Object.keys(requests).some((requestUrl) => {
            let matchs = url.match(requests[requestUrl]['regexp'])
            response = matchs && matchs[0] ? requests[requestUrl] : null
            return response
        })
    }

    if (response) {
        promise = new Promise((resolve, reject) => {
            if (response.status === 200) {
                resolve(new Response(new Blob([response.body], {type: response.type}), {
                //resolve(new Response(JSON.stringify(response.body), {
                    status: 200,
                    statusText: 'OK'
                }))
            } else {
                reject(new Response(new Blob([response.status], {type: response.type}), {
                //reject(new Response(JSON.stringify(response.body), {
                    status: response.status,
                    statusText: 'Error'
                }))
            }
        })
    } else {
        promise = fetch0(input, init)
    }

    return promise
}
