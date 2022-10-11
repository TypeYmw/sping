const Login = () => import(/* webpackChunkName: "login" */'@/pages/login/index.vue');

export default [
  {
    path: '/login',
    component: Login,
    name: 'Login',
    meta: {
      title: '登陆'
    }
  }
];
