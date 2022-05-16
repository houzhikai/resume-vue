export default [
  {
    icon: 'el-icon-s-home',
    description: '首页',
    code: 'home'
  },
  {
    icon: 'el-icon-share',
    description: '我的页面',
    code: 'page',
    children: [
      {
        url: '/home',
        description: '全部订单'
      },
      {
        url: '/orderListPart',
        description: '部分订单'
      }
    ]
  },
  {
    icon: 'el-icon-edit',
    description: '我的服务',
    code: 'system',
    children: [
      {
        url: '/address',
        description: '地址信息'
      },
      {
        url: '/awardList',
        description: '中奖记录'
      }
    ]
  }
];