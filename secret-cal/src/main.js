import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from "aos";
import 'animate.css';

Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "../node_modules/aos/dist/aos.css";

AOS.init();
Vue.use(ElementUI);

import http from './axios/http.js' //axios实例化后引入取名http
Vue.prototype.http = http //放入全局
Vue.prototype.$AOS = AOS //放入全局
new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
