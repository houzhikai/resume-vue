const views = {
  home: () => import(/* webpackChunkName: "views/home" */ "./home"),
  orderListAll: () => import(/* webpackChunkName: "views/orderListAll" */ "./orderListAll"),
  orderListPart: () => import(/* webpackChunkName: "views/orderListPart" */ "./orderListPart")
};

export default views;