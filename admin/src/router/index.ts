import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '../views/Main.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '', name: 'home', component: () => import(/* webpackChunkName: "main" */ '../views/Home.vue') },
      { path: 'users/usersList', name: 'usersList', component: () => import(/* webpackChunkName: "main" */ '../views/users/UsersList.vue') },
      { path: 'courses/coursesList', name: 'coursesList', component: () => import(/* webpackChunkName: "main" */ '../views/courses/CoursesList.vue') },
      { path: 'episodes/episodesList', name: 'episodesList', component: () => import(/* webpackChunkName: "main" */ '../views/episodes/EpisodesList.vue') },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
