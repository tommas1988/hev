// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import App from './App.vue';

import Category from './components/category.vue';
import Tag from './components/tag.vue';
import ExpenseDetail from './components/expense-detail.vue';
import ExpenseList from './components/expense-list.vue';
import Stats from './components/stats.vue';

Vue.use(VueRouter);
Vue.use(iView);

Vue.config.productionTip = false;

const routes = [
  { path: '/settings/category', component: Category },
  { path: '/settings/tag', component: Tag },
  { path: '/expense/new', component: ExpenseDetail },
  { path: '/expense/new/:date', component: ExpenseDetail },
  { path: '/expense/:id', component: ExpenseDetail },
  { path: '/expense/list', component: ExpenseList },
  { path: '/stats', component: Stats },
]

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});