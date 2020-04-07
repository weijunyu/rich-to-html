import Vue from "vue";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";

import "tippy.js/dist/tippy.css";

import "./normalize.css";
import "./main.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
