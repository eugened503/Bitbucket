import { createApp } from "vue";
import App from "./App.vue";
import "./main.scss";
import Maska from "maska";
import store from "../store/index";

createApp(App).use(Maska).use(store).mount("#app");
