'use strict'

import Vue from 'vue'

import App from './components/App.vue'

new Vue({
  el: 'app',
  created: function () {
    console.log('created')
  },
  components: {App},
  methods: {}
})
