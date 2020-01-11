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
      { path: 'users/userList', name: 'userList', component: () => import(/* webpackChunkName: "main" */ '../views/users/UserList.vue') },
      // 使用avue 实现数据crud操作
      { path: 'courses/courseCrud', name: 'courseCrud', component: () => import(/* webpackChunkName: "main" */ '../views/courses/CourseCrud.vue') },
      // 使用vue-ele-form 数据驱动表单操作
      // { path: 'courses/courseList', name: 'courseList', component: () => import(/* webpackChunkName: "main" */ '../views/courses/CourseList.vue') },
      // { path: 'courses/courseCreate', name: 'courseCreate', component: () => import(/* webpackChunkName: "main" */ '../views/courses/CourseEdit.vue') },
      // { path: 'courses/courseEdit/:id', name: 'courseEdit', component: () => import(/* webpackChunkName: "main" */ '../views/courses/CourseEdit.vue'), props: true },
      { path: 'episodes/episodeList', name: 'episodeList', component: () => import(/* webpackChunkName: "main" */ '../views/episodes/EpisodeList.vue') },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
