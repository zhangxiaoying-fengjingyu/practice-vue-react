# vueproject

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 父传子
# 在父组件中import引入子组件、components挂载、子组件上传参数、在子组件中通过props接受参数、子组件中显示内容

## 子传父
# 在父组件中import引入子组件、components挂载、子组件上传自定义事件@transfer='方法名'、在父组件中写方法接收参数name，在方法中对data中数据修改this.count = name、在子组件中写事件，在事件方法中通过this.$emit触发事件（'transfer',data中值）   ------------------------实际上就是绑定自定义事件transfer，将值绑定到transfer上传过去