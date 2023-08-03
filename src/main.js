// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//1.nodeJSをインストール；2.ideのvueをインストール
//3.コマンドプロンプトでファイルを開く
import Vue from 'vue'
import App from './App'
//element-uiの導入
//Vue.jsのコンポーネントライブラリ. よく使うデザインやフォームのコンポーネントがあるので、使い所が多
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
//axiosの導入
//GET や POST の HTTP リクエストを使ってサーバからデータの取得、サーバへのデータ送信を通してデータの追加、更新、削除
import axios from 'axios'
//routerの導入
//ルーティングファイル
import VueRouter from 'vue-router'
import router from './router'


Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.use(VueRouter)
//vueが起動するときのヒントを止める
Vue.config.productionTip = false


new Vue({
  router,

  // render:(function(h){
  //  return h(App);
  // });
  //渲染App组件
  render: h => h(App),
}).$mount('#app')//appというidのdomにマウントする 挂载
