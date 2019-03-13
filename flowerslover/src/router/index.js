import Vue from 'vue'
import Router from 'vue-router'

import people from './modules/people'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    ...people,
  ]
})
