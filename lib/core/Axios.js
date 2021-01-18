
function Axios(instanceConfig) {
    this.defaults = instanceConfig
    this.intercepters = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    }
}

Axios.prototype.request = function request(config) {
    // ...省略代码
};

utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    Axios.prototype[method] = function (url, config) {
        return this.request(utils.merge(config || {}), {
            method: method,
            url, url
        })
    }
})

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    Axios.prototype[method] = function (url, data, config) {
        return this.request(utils.merge(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
})