import { useContext } from 'react'
import { List, Users } from 'react-feather'
import { kFormatter } from '@utils'
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
import jsonImg from '@src/assets/images/icons/json.png'
import InvoiceList from '@src/views/apps/invoice/list'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Sales from '@src/views/ui-elements/cards/analytics/Sales'
import AvgSessions from '@src/views/ui-elements/cards/analytics/AvgSessions'
import CardAppDesign from '@src/views/ui-elements/cards/advance/CardAppDesign'
import SupportTracker from '@src/views/ui-elements/cards/analytics/SupportTracker'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'

import '@styles/react/libs/charts/apex-charts.scss'

const AnalyticsDashboard = () => {
  const { colors } = useContext(ThemeColors)

  const avatarGroupArr = [
      {
        title: 'Billy Hopkins',
        img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Amy Carson',
        img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Brandon Miles',
        img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Daisy Weber',
        img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Jenny Looper',
        img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      }
    ],
  data = [
    {
      title: '12 Invoices have been paid',
      content: 'Invoices have been paid to the company.',
      meta: '',
      metaClassName: 'mr-1',
      customContent: (
        <Media>
          <img className='mr-1' src={jsonImg} alt='data.json' height='23' />
          <Media className='mb-0' body>
            data.json
          </Media>
        </Media>
      )
    },
    {
      title: 'Client Meeting',
      content: 'Project meeting with john @10:15am.',
      meta: '',
      metaClassName: 'mr-1',
      color: 'warning',
      customContent: (
        <Media className='align-items-center'>
          <Avatar img={ceo} />
          <Media className='ml-50' body>
            <h6 className='mb-0'>John Doe (Client)</h6>
            <span>CEO of Infibeam</span>
          </Media>
        </Media>
      )
    },
    {
      title: 'Create a new project for client',
      content: 'Add files to new design folder',
      color: 'info',
      meta: '',
      metaClassName: 'mr-1',
      customContent: <AvatarGroup data={avatarGroupArr} />
    },
    {
      title: 'Create a new project for client',
      content: 'Add files to new design folder',
      color: 'danger',
      meta: '',
      metaClassName: 'mr-1'
    }
  ]

  const dataInfoChart = [
      {
        icon: <Users size={21} />,
        color: 'danger',
        colorHEX: colors.danger.main,
        quantity: 9876,
        title: 'Total de Casos',
        data: [28, 40, 36, 52, 38, 60, 55]
      },
      {
        icon: <Users size={21} />,
        color: 'warning',
        colorHEX: colors.warning.main,
        quantity: 9876,
        title: 'Casos Abiertos',
        data: [28, 40, 36, 52, 38, 60, 55]
      },
      {
        icon: <Users size={21} />,
        color: 'secondary',
        colorHEX: colors.secondary.main,
        quantity: 9876,
        title: 'Casos Finalizados',
        data: [28, 40, 36, 52, 38, 60, 55]
      },
      {
        icon: <Users size={21} />,
        color: 'primary',
        colorHEX: colors.primary.main,
        quantity: 9876,
        title: 'Reporteros Activos',
        data: [28, 40, 36, 52, 38, 60, 55]
      }
    ]

  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        {dataInfoChart.map((dataInfoChart, index) => (
          <Col lg='3' sm='6' key={index}>
            <SubscribersGained kFormatter={kFormatter} dataInfoChart={dataInfoChart} />
          </Col>
        ))}
        
        <Col lg='4' md='12'>
          <Row className='match-height'>
            <Col lg='6' md='6' xs='6'>
              <OrdersBarChart warning={colors.warning.main} />
            </Col>
            <Col xs='6'>
              <ProfitLineChart info={colors.info.main} />
            </Col>
            <Col lg='12' md='6' xs='12'>
              <Earnings success={colors.success.main} />
            </Col>
          </Row>
        </Col>
        <Col lg='4' md='6' xs='12'>
          <GoalOverview success={colors.success.main} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardBrowserStates colors={colors} trackBgColor='#e9ecef' />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardTransactions />
        </Col>
        <Col lg='8' xs='12'>
          <AvgSessions colors={colors} />
        </Col>
        <Col xs='12'>
          <InvoiceList />
        </Col>
      </Row>
    </div>
  )
}

export default AnalyticsDashboard
