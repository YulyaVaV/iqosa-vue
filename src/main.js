import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import AosVue from 'aos-vue';

import VueKinesis from "vue-kinesis";

const app = createApp(App);
app.use(VueKinesis);

createApp(App).use(router).use(AosVue).mount('#app')

