import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // /index.js 가 생략되어 있는 것임

createApp(App).use(router).mount("#app");
