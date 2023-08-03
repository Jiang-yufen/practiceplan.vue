import Vue from 'vue'
import VueRouter from 'vue-router'
//コンポーネントをインポート
import user from '../components/user.vue'
import userapply from '../components/userapply.vue'
import makesure from '../components/makesure.vue'
import practiceplan from '../components/practiceplan.vue'

Vue.use(VueRouter)

const router = new VueRouter({

  //ルーティングを設置する
  routes:[
    {
      path:'/user',
      name:'UserLogin',
      component:user
    },
    {
      path: '/userapply',
      name: 'UserApply',
      component: userapply
    },
    {
      path: '/makesure',
      name: 'MakeSure',
      component: makesure
    },
    {
      path: '/practiceplan',
      name: 'PracticePlan',
      component: practiceplan
      // component: () => import('E:\\jyf1\\VUE3\\vue01\\vueagain01\\src\\components\\practiceplan.vue')
    }
  ],
  //hash.history
  mode:'history'
})


export default router
