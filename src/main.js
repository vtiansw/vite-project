import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from "axios";
// import Test from './App.jsx'


Vue.prototype.$axios = axios;

createApp(App).mount('#app')
