import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import Url from '../../constants/Url'

const AppRoutes = [
  {
    path: Url.dashboardInbox,
    exact: true,
    component: lazy(() => import('../../views/apps/bandeja'))
  },
  {
    path: Url.dashboardInboxCreate,
    exact: true,
    component: lazy(() => import('../../views/apps/report/create')),
    meta: {
      navLink: Url.dashboardInbox
    }
  },
  {
    path: Url.reportCreate,
    exact: true,
    component: lazy(() => import('../../views/apps/report/create'))
  },
  {
    path: Url.user,
    component: lazy(() => import('../../views/apps/user/list')),
    exact: true
  },
  {
    path: Url.userCreate,
    component: lazy(() => import('../../views/apps/user/create')),
    exact: true
  },
  {
    path: Url.userReporter,
    component: lazy(() => import('../../views/apps/user/reportero'))
  },
  {
    path: Url.userOfficial,
    component: lazy(() => import('../../views/apps/user/oficiales'))
  },
  {
    path: Url.userEdit,
    exact: true,
    component: () => <Redirect to='/apps/user/edit/1' />
  },
  {
    path: `${Url.userEdit}/:id`,
    component: lazy(() => import('../../views/apps/user/edit')),
    exact: true,
    meta: {
      navLink: Url.userEdit
    }
  },
  {
    path: `${Url.user}/:id`,
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: Url.user
    }
  },
  {
    // temporal route
    path: '/apps/invoice/preview',
    component: lazy(() => import('../../views/apps/invoice/preview'))
  }
]

export default AppRoutes
