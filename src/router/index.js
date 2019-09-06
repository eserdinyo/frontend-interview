import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import firebase from "firebase";
import store from '../store';

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
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
      component: () => import('../pages/Questions.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      meta: { requiresAdmin: true },
      component: () => import('../pages/Admin/Admin.vue'),

    }, {
      path: '/admin/question/:slug',
      name: 'AdminQuestion',
      meta: { requiresAdmin: true },
      component: () => import('../pages/Admin/AdminQuestionDetail.vue'),
    },
    {
      path: '/admin/question-edit/:slug',
      name: 'AdminQuestionEdit',
      meta: { requiresAdmin: true },
      component: () => import('../pages/Admin/AdminQuestionEdit.vue'),
    }
  ]
})



// Handle Auth
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
  }
  else if (to.matched.some(record => record.meta.requiresAdmin)) {

    if (store.state.currentUser) {
      if (store.state.currentUser.providerData[0].uid !== "26261087") {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    }

  }
  else {
    next();
  }
})

export default router;
