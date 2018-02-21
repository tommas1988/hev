// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

// import routes from './routes';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(iView);

Vue.config.productionTip = false;

const router = new VueRouter({
  // routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});