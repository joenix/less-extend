// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import highlight from 'highlight.js';

Vue.prototype.$highlight = highlight;

import './style/index.less';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
