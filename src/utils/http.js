import axios from "axios"
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import { Message } from 'element-ui'

// 调用axios.create方法，配置一些属性，返回一个新的axios
const http = axios.create({
    baseURL: "",
    //请求超时时间
    timeout: 2000,
    withCredentials: true
})

// 请求拦截
http.interceptors.request.use(
    //config 代表是你请求的一些信息
    config => {
        // 在请求发送之前的操作
        return config
    },
    error => {
        // 对错误请求的处理
        // 弹出错误请求消息
        Message({
            showClose: true,
            message: error.message,
            type: "error"
        })
        return Promise.reject(error)
    }
)

//  response拦截器 响应拦截器 请求之后的操作
http.interceptors.response.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

 //get方法，对应get请求
 // @param {String} url [请求的url地址]
  //@param {Object} params [请求时携带的参数]
 
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
    })    
});}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}