import Vue from 'vue'
import App from './App.vue'
import Header from './components/header'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

Vue.component('app-header', Header)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");