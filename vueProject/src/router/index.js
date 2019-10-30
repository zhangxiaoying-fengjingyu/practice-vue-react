import Vue from 'vue'
import Router from 'vue-router'
import Parent from '../containers/parent.vue'
import Son from '../containers/son.vue'
import GroundSon from '../containers/groundSon.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'parent'
    },
    {
      path: '/parent',
      name: 'parent',
      component: Parent
    },
    {
      path: '/son',
      name: 'son',
      component: Son
    },
    {
      path: '/groundSon',
      name: 'groundSon',
      component: GroundSon
    }
  ]
})
