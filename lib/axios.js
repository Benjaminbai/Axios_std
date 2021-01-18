function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig)
    var instance = bind(Axios.prototype.request, context)
    utils.extend(instance, Axios.prototype, context)
    utils.extend(instance, context)
    return instance
}
var axios = createInstance(defaults)

axios.Axios = Axios
axios.create = function(instanceConfig) {
    return createInstance(utils.merge(defaults, instanceConfig))
}