
# 原生微信小程序 项目模板
### 模板中的状态管理器 
- 强化辅助状态管理器 持久化状态管理
- 独立封装 processor 处理器, 配合缓存持久化状态管理器,使用简单方便
```
Page 页面使用
const app = getApp()
当 app.js 中, state 里面的状态, 需要使用持久化存储,
// 登陆状态 -- 示例 传入两个值(String,Any),缓存存储键 String, 默认值(可不传当缓存中没有返回字符串''): Any, 
state: {
    loginState: processor.get('loginState',false)
}
在更新状态 app.store.setState({}) 后, 
调用 app.processor.set(key,value) 进行缓存存储(key类型string,value类型any),
方法1: 指定单个值存储 app.processor.set(key,value)
方法2: 多个值存储 app.processor.set({ key: value, key: value, .... })
```

### 模板中的mixin
- 强化辅助mixin, 使mixin更加简单方便 l类似vue2的mixin
```
