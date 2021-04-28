import Vue from 'vue'
import App from './App.vue'
import Header from './components/header'
import router from './router'

Vue.config.productionTip = false
Vue.component('app-header', Header)
new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");