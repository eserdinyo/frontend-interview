import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import QuestionDetail from '../pages/QuestionDetail.vue'
import AddQuesiton from '../pages/AddQuestion.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/question-detail/:id',
      name: 'question-detail',
      component: QuestionDetail
    },
    {
      path: '/add-question',
      name: 'add-question',
      component: AddQuesiton
    },
    {
      path: '/questions/:id',
      name: 'questions',
      component: () => import(/* webpackChunkName: "about" */ '../pages/Questions.vue')
    }
  ]
})
