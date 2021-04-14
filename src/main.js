import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import posts from "./posts.js";
import comments from "./comments.js";
import UUID from "vue-uuid";

let data = {
  posts: posts,
  postId: [0],
  comments: comments,
};

Vue.use(UUID);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
