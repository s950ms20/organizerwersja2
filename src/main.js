import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueFire)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

firebase.initializeApp({
  projectId: 'organizer-f6d0f',
  databaseURL: 'https://organizer-f6d0f.firebaseio.com'
})

export const db = firebase.firestore();

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
