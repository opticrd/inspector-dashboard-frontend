import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '1',
    children: [
      {
        id: 'analyticsDash',
        title: 'Analítica',
        icon: <Circle size={12} />,
        navLink: '/dashboard/analytics'
      }
      // {
      //   id: 'eCommerceDash',
      //   title: 'eCommerce',
      //   icon: <Circle size={12} />,
      //   navLink: '/dashboard/ecommerce'
      // }
    ]
  }
]
