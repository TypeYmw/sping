import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'
import importVantComponents from './config/importVantComponents'

// import 'vue-global-api';
import 'virtual:windi.css';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App);

// 引入vant组件
importVantComponents(app)

app
  .use(router)
  .use(createPinia())
  .mount('#app');
