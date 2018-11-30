import {_get,_put,_post,_delete} from './index';

// 使用
export const province=(data)=>{
   let req={//这种get方式的参数是在url后直接拼接的
       url:`/rest/province`,
       data
   };

   return _get(req)
}


export const city=(data)=>{
  let req={//id在url后显示
      url: `/rest/city/${data.provinceId}`
  };

  return _get(req)
}


// delete put post  都是这种写法   Payload格式
export const editMenu=(data)=>{
  let req={
      url:'rest/menu',
      data
  };
  return _put(req)
}
