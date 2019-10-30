<template>
    <div class="groundSon">
       {{groundSon}}
       <p>孙子：{{$store.state.User.value}}</p>
       <button @click="change">点我修改值</button>
    </div>
</template>
<script>
export default {
    props:['value'],
    data(){
        return{
            groundSon:'我是孙子组件'
        }
    },
    methods: {
        change(){
            this.$emit('input',89000)
        }
    },
}
</script>
<style lang="">
    .groundSon{
        width: 300px;
        height: 200px;
        background: yellow
    }
</style>