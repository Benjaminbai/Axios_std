# Axios_std

1. 一次合并发送多个请求
    - 利用axios的all方法接收一个由每个请求函数组成的数组，可以一次性发送多个请求
    - 如果全部请求成功，在axios.spread方法接收一个回调函数，该函数的参数就是每个请求返回的结果
    ```
    function getUserAccount(){
        return axios.get('/user/12345');
    }
    function getUserPermissions(){
        return axios.get('/user/12345/permissions');
    }
    this.$axios.all([getUserAccount(),getUserPermissions()])
        .then(axios.spread(function(res1,res2){
            //当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
        }))
    ```
2. axios为所有请求方式都提供了别名：
    - axios.request(config)
    - axios.get(url, [config])
    - axios.delete(url, [config])
    - axios.head(url, [config])
    - axios.options(url, [config])
    - axios.post(url, [data], [config])
    - axios.put(url, [data], [config])
    - axios.patch(url, [data], [config])
3. axios配置默认值
    - 可以通过axios.defaults设置全局默认值，在所有请求中都生效
    ```
    axios.defaults.headers.common["token"] = ""
    axios.defaults.headers.post["Content-type"] = "application/json"
    axios.defaults.baseURL = 'https://service.xxx.com; //设置统一路径前缀
    ```
4. 拦截器
    - 可以分别设置请求拦截和响应拦截，在发出请求和响应到达then之前进行判断处理。
    ```
    axios.interceptors.response.use(
        res => {
            if (res) {
                return res;
            }
        },
        err => {
            return Promise.reject(error);
        }
    );
    ```
5. 取消请求
    - 取消请求需要先通过创建CancelToken.source工厂函数创建一个标识sorce
    - 通过配置项制定标识，这样才知道取消的是哪个请求
    - 调用取消方法
    ```
    var CancelToken = axios.CancelToken
    var source = CancelToken.sorce()
    axios.post("url", {params}, {
        CancelToken: source.token
    })
    source.cancel('Operation canceled by the user.')
    ```
6. 跨域配置
    - 如果我们要跨域请求数据，在配置文件里设置代理
    
