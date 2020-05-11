import App from '@/app.vue';
import Vue from 'vue';

new Vue({
    components: {
        App
    },
    el: 'vue-app',
    render: (h) => h(App)
});
