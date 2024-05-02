import { createApp } from "vue";
import App from "./App.vue";
import pinia from "./store";

import "uno.css";

const app = createApp(App);
app.use(pinia).mount("#app");
