import Vue from "vue";
import VueRouter from "vue-router";

// 使用路由插件
Vue.use(VueRouter);

// 引入路由显示的页面
import Order from "@/pages/Order"
import LogisticsCenter from '@/pages/LogisticsCenter'
import DoneOrder from '@/pages/DoneOrder'
import TransOrder from '@/pages/TransOrder'
import OrderList from '@/pages/OrderList'
import NotFound from '@/components/404.vue'
import Login from "@/pages/Login"
import PersonalCenter from "@/pages/PersonalCenter.vue"

// 司机页面
import OrderList_Driver from "@/pages/Driver/OrderList"
import History from "@/pages/Driver/History"
import LogisticsCenter_driver from "@/pages/Driver/LogisticsCenter"


// 向外暴露并配置路由
const router = new VueRouter({
  routes: [
    // 登录页面
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 订单页面
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    // 运输中订单页面
    {
      path: '/trans-order',
      name: 'TransOrder',
      component: TransOrder
    },
    // 已完成订单页面
    {
      path: '/done-order',
      name: 'DoneOrder',
      component: DoneOrder
    },
    // 待运输订单页面
    {
      path: '/order-list',
      name: 'OrderList',
      component: OrderList
    },
    // 物流中心页面
    {
      path: '/logistics-center',
      name: 'LogisticsCenter',
      component: LogisticsCenter
    },
    // 个人中心页面
    {
      path: '/personal',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    // 重定向至登录页面
    {
      path: '/',
      redirect: '/login',
      component: Login
    },


    /* 司机页面 */
    // 订单列表
    {
      path: "/driver_orderlist",
      name: 'Driver_OrderList',
      component: OrderList_Driver,
      meta: { DriverRole: true }
    },
    // 历史订单
    {
      path: '/history',
      name: 'HistoryOrder',
      component: History
    },
    // 更新物流页面
    {
      path: '/LogisticsCenter_driver',
      name: 'LogisticsCenter_driver',
      component: LogisticsCenter_driver
    },
    {
      // 404页面
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})

// 全局路由守卫
// 用于判断用户身份
router.beforeEach((to, from, next) => {
  const role = to.meta.DriverRole;
  if (role) {
    console.log("司机身份");
    next();
  } else {
    next();
  }
})

export default router;