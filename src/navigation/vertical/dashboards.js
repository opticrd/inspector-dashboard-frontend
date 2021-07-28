import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboard',
    icon: <Home size={20} />,
    children: [
      {
        id: 'reports',
        title: 'Reportes',
        icon: <Circle size={12} />,
        navLink: '/dashboard/analytics'
      },
      {
        id: 'bandeja',
        title: 'Bandeja',
        icon: <Circle size={12} />,
        navLink: '/apps/bandeja'
      }
    ]
  }
]
