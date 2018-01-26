'use strict'

import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App.vue'

new Vue({
  el: 'app',
  created: function () {
    console.log('created')
  },
  components: {App},
  methods: {}
})
