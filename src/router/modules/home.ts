const Home = () => import('@/pages/home/index.vue');
const Chat = () => import('@/pages/home/chat.vue');

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      title: '登陆'
    },
    children: [
      {
        path: 'chat',
        component: Chat,
        name: 'homeChat'
      }
    ]
  }
];
