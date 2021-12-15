请求体封装函数
传入 axios 或者 fetch 或者其他请求类

### 安装

```
# pnpm
pnpm i imba-request
```

### 使用

```
xx_intercept.js
import axios from 'axios'
import { setRequestInit, requestAction } from 'imba-request'

const http = axios.create({
 baseURL: 'xxxx'
 timeout: 6789
})

const is_dev = env.xxx ? true : false

// 初始化封装请求包
setRequestInit({
 page: 'pageCur',
 size: 'pageSize',
 dev: is_dev,
 http: http
})

http.interceptors.request.use(...)
http.interceptors.response.use(...)
export default requestAction
```

```
api.js

import action from '... intercept.js'
import { lazyModule } from 'imba-lazy'

const METHOD = {
    GET: 'GET',
    POST: 'POST'
}

// 公共api
const api = {
 app_111: 'index/ddd',
 app_222: 'index/:id/fff', // 在param传入 _id 即可

 // 定义API [地址,请求类型,缓存时间] 缓存时间默认0
 app_333: ['index/ddd/:id', METHOD.GET],
 app_444: ['index/www', METHOD.GET, 10],
 app_555: ['index/eee', METHOD.POST, 20],
 app_666: ['index/qqq/:id/update', METHOD.POST], // 修改或删除 不要定义缓存时间
 error: ['error', METHOD.POST] // 试错请求 没有配置mock
}

// vite 自动化导入模块
const moduleFiles = import.meta.glob('./module/*.js')
// console.log('api moduleFiles', moduleFiles)

export default (name, ...args) => {
 // 外链请求 不要可以去除
 if (args && args[0] && args[0]._onec) return name && action(name, ...args)

 // 懒加载其他API module js
 if (name && name.indexOf('/') !== -1) {
  let [fileName, apiName] = name.split('/')
  return new Promise((resolve) => {
   lazyModule(fileName, moduleFiles).then((moduleApi) => {
    resolve(action(moduleApi[apiName], ...args))
   })
  })
 }

 // 返回公共API
 return name && api[name] && action(api[name], ...args)
}

```

```
使用
import api from '...  api.js'

const param = { xx: '', xxx: 111 }
const body = { xx: '', xxx: 111 }
const cache = 5

// 1 config/module/**
api('<文件夹名称>/<接口名称>', param, body, cache)

// 2 -> config/module/test_api.js -> test_user -> api/test/:id/user
api('test_api/test_user', { _id: 11 })

// 3 -> 分页
api('<文件夹名称>/<接口名称>', { _page: [1, 10] })

const test = async () => {
    return await api('api/xxxx', param, body, cache)
}

// or

const test = () => {
    api('api/xxxx', param, body, cache).then((res) => {
        console.log(res)
        ...
    })
}

```

### 函数

setRequestInit
requestAction
