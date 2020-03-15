import Vue from "vue";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";

import "sgds-govtech/css/sgds.css";

import "tippy.js/dist/tippy.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
