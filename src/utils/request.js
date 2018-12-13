/*
 * File: request.js
 * Project: reactDemo
 * File Created: Friday, 7th December 2018 3:16:18 pm
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Tuesday, 11th December 2018 2:36:01 pm
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description
 * 
 */
 var baseUrl = ''//共有部分例如10.10.10.2
class BaseRequest {
  
  async fetch(url, options) {
    // let token = await Storage.get("token") || '';//请求的token
    // console.log('token', token)
   
    const defaultOptions = { //默认请求配置
      method: 'GET',
      headers: {
        'token': '',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      fetchType :'CORS'
    };

    const sendOptions = { ...defaultOptions, ...options };

    let response = null;
    try {
      let urls = baseUrl + url;//请求的完整地址
      console.log(urls)
      response = await fetch(urls, sendOptions);
      const status = await response.status;
      if (status >= 200 && status < 300) {
        response = await response.json();
        if (!response.success) {
          console.log(response.data.msg || '未知错误')
        };
      }
      if (status == 404) {
        console.log('接口地址错误')
      }
      if (status == 500) {
        console.log('服务器错误')
      }
      if (status == 401 || status == 403) {
        console.log('登陆过期，请重新登录')
      }
      return response;
    } catch (e) {
      console.log('异常',e)
      return { success: false }
    }
  }
}
// let CORS= []
// let YQL=[]

export default new BaseRequest();
// export default function BaseRequest(options) {
//   console.log(options)
// 	if (options.url && options.url.indexOf('//') > -1) {
// 		const origin = `${options.url.split('//')[0]}//${options.url.split('//')[1].split('/')[0]}`
// 		if (window.location.origin !== origin) {
// 			if (CORS && CORS.indexOf(origin) > -1) {
// 				options.fetchType = 'CORS'
// 			} else if (YQL && YQL.indexOf(origin) > -1) {
// 				options.fetchType = 'YQL'
// 			} else {
// 				options.fetchType = 'JSONP'
// 			}
//     }
//   console.log('aa',options)
    
// 	}

// 	return fetch(options.url,{method: options.method}).then(async (response) => {
//     console.log(response)
//         // const { statusText, status} = response;
//         // if(status >= 200 && status < 300){
//         //     return Promise.resolve({
//         //         ...response.data,
//         //         success: response.data.success,
//         //         message: response.data.msg,
//         //         msg: response.data.msg,
//         //         statusCode: status,
//         //     })
//         // }
//         // if(status == 404){
//         //     // message.error(`接口地址错误`, 5);
//         //     console.log(response);
//         // }
//         // if(status == 500){
//         //     // message.error(`服务器500错误`, 5);
//         // }
// 	}).catch(async (error) =>{
//         // const {status} = error.response;
//         console.log(error);

//         // if(status == 401 || status == 403){
//             // await clearCookieAndLocalStorage();
//             // if(!sessionStorage.getItem("account")){
//             //     await clearCookieAndLocalStorage();
//             //     location.href = '/login?from=' + location.pathname;
//             // }else{
//             //     global.dispatch({
//             //         type:"app/updateState",
//             //         payload:{
//             //             loginModal:true
//             //         }
//             //     })
//             // }
//             // return Promise.resolve({
//             //     ...error.response.data,
//             //     success: error.response.data.success,
//             //     message: error.response.data.data.msg,
//             //     msg: error.response.data.data.msg,
//             //     statusCode: status,
//             // })
//         // }else if(status == 404){
//             // message.error(`接口地址错误`, 5);
//             // console.log(response);
//         // }else if(status >= 500){
//             // message.error(`服务器500错误`, 5);
//         // }else{
//             // await clearCookieAndLocalStorage();
//             // message.error('系統出错', 5);
//             // location.href = '/login?from=' + location.pathname;
//         // }
// 	});
// }






