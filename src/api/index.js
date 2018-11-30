import axios from 'axios';
import qs from 'qs';//转为Form  Data格式


// 提交的数据格式是最外层有一个对象封起来的  Payload格式
// get  获取数据 
export const _get=(req)=>{
    return axios.get(req.url,{params:req.data})
}

// post 
export const _post =(req)=>{
  return axios({method:'post',url:`/${req.url}`,data:req.data})
}

// put
export const _put=(req)=>{
   return axios({
       method:'put',
       url:`/${req.url}`,
       data:req.data
   })
}


// delete
export const _delete=(req)=>{
  return axios({
      method:'delete',
      url:`/${req.url}`,
      data:req.data
  })
}

// Form Data 数据
// 例如：
// export const editShop=(params)=>{
//    return axios({
//        method:'put',
//        url:'modity/shopModityPriceInfo',
//        data:qs.stringify(params)
//    })
// }