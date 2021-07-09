import { useContext } from 'react'
import { kFormatter } from '@utils'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import AvgSessions from '@src/views/ui-elements/cards/analytics/AvgSessions'
import { Row, Col } from 'reactstrap'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'

import DataTableList from '@components/table'

import { columnsTable } from './columnsTable'
import { dataInfoChart } from './dataInfoChart'

import '@styles/react/libs/charts/apex-charts.scss'

const AnalyticsDashboard = () => {

  const { colors } = useContext(ThemeColors)

  const infoChart = dataInfoChart()

    // ** Table data to render
  const dataToRender = () => {
    const filters = {
      role: currentRole.value,
      currentPlan: currentPlan.value,
      status: currentStatus.value,
      q: searchTerm
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      return store.data
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, rowsPerPage)
    }
  }

  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        {infoChart.map((dataInfoChart, index) => (
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
          <DataTableList 
            columnsTable={columnsTable} 
            showButtonAdd={true}
          />
        </Col>

      </Row>
    </div>
  )
}

export default AnalyticsDashboard
