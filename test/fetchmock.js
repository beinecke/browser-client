let n = 1

let fetch0 = fetch

let requests = {}

export function sid() {
    return ((+new Date() + Math.random())*9999).toString(36)
}

export function nid() {
    return n++
}

export default function mock(input, responseBody, responseStatus, responseType) {
    if (typeof input !== 'string') {
        throw new Error('The mock\'s first argument must be a url.')
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
        body: responseBody,
        status: responseStatus,
        type: responseType
    }
}

fetch = (input, init) => {
    let url = input, promise, response
    if (input instanceof Request) {
        url = input.url
    }

    if (requests[url]) {
        response = requests[url]
        promise = new Promise((resolve, reject) => {
            if (response.status === 200) {
                resolve(new Response(new Blob([response.body], {type: response.type}), {
                    status: 200,
                    statusText: 'OK'
                }))
            } else {
                reject(new Response(new Blob([response.status], {type: response.type}), {
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
