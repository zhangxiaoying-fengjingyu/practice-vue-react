<template>
    <div class="son">
        <p>{{son}}</p>
        <p>这里的值是：{{$store.state.User.value}}</p>
        <span class="send">子组件接受到的内容：{{PS}}</span>
        <button @click="SonSendParent">子传父</button>
    </div>
</template>
<script>
export default {
    props:['PS'],
    data(){
        return{
            son:'我是儿子组件',
            name:'子组件传给父组件'
        }
    },
    methods:{
        SonSendParent:function(){
            this.$emit('ParentAcceptSon',this.name)
        }
    }
}
</script>
<style lang="">
.son{
    width: 300px;
    height: 200px;
    background: pink;
}
.send{
    color:red
}
</style>