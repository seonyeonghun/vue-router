import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/Home.vue';                       
import AboutView from '../views/About.vue';
import BoardView from '../views/Board.vue';

Vue.use(VueRouter);
export const router = new VueRouter({
    mode: 'history',
    routes:[
        //path : url 주소, component : 페이지에 보여질 컴포넌트
        {
            path: '/',
            name : 'Home',
            component: HomeView
        },
        {
            path: '/about',
            name : 'About',
            component: AboutView
        },
        {
            path: '/board',
            name : 'Board',
            component: BoardView
        },
    ]
});