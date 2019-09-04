import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import firebase from "firebase";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/question/:slug',
      name: 'question',
      component: () => import('../pages/QuestionDetail.vue')
    },
    {
      path: '/add-question',
      name: 'add-question',
      meta: { requiresAuth: true },
      component: () => import('../pages/AddQuestion.vue')

    },
    {
      path: '/questions/:id',
      name: 'questions',
      component: () => import('../pages/Questions.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!firebase.auth().currentUser) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next();
  }
})




export default router;
