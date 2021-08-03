import { Circle, User } from 'react-feather'
import Url from '../../constants/Url'

export default [
  {
    id: 'users',
    title: 'Usuario',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'Lista',
        icon: <Circle size={12} />,
        navLink: Url.user
      },
      {
        id: 'reportero',
        title: 'Reportero',
        icon: <Circle size={12} />,
        navLink: Url.userReporter
      },
      {
        id: 'oficiales',
        title: 'Oficiales',
        icon: <Circle size={12} />,
        navLink: Url.userOfficial
      }
    ]
  }
]
