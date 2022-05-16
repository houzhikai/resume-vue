import Home from './views/home';
import OrderListAll from './views/orderListAll';

export default [
  { path: '/', component: Home, name: "home" },
  { path: '/orderListAll', component: OrderListAll, name: "orderListAll" },
];