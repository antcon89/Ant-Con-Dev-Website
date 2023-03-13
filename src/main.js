import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ScrollFixedHeader from "vuejs-scroll-fixed-header";
import BackTop from "@mlqt/vue-back-top";
import VueScrollReveal from "vue-scroll-reveal";
import VueScrollactive from "vue-scrollactive";
import "./assets/scss/style.scss";

Vue.use(BackTop);
Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal",
  duration: 1500,
  scale: 1,
  distance: "100px",
  mobile: true,
});
Vue.use(VueScrollactive);
Vue.use(ScrollFixedHeader);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
