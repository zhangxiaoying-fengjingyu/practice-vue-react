<template>
    <div>
        <div class="parent">
            <p>{{parent}}</p>
            <p >父组件接收到的内容：{{cont}}</p>
            <input type="text" v-model="iptValue">
            <button @click="setValueFn">传参</button>
        </div>
        <Son PS = '父组件传给子组件' @ParentAcceptSon='getSonSendParent'></Son>
        <GroundSon v-model="iptValue"></GroundSon>
    </div>
</template>
<script>
import Son from './son'
import GroundSon from './groundSon'
export default {
    components:{
        Son,
        GroundSon
    },
    mounted() {
        
    },
    created() {
        
    },
    data() {
        return {
            parent:'我是父亲组件',
            cont:'子传父',
            iptValue:''
        }
    },
    computed: {
        
    },
    methods: {
       getSonSendParent(name){
           this.cont = name
       },
       setValueFn:function(){
           this.$store.commit('setValue',this.iptValue)
       }
    },
}
</script>
<style lang="">
    .parent{
        width: 300px;
        height: 200px;
        background: orchid;
    }
</style>