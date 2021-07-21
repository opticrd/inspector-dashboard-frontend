import { columns } from './columns'
import { dataInfoChart } from './dataInfoChart'

import SubscribersGained from './SubscribersGained'

import { Row, Col } from 'reactstrap'
import { kFormatter } from '@utils'

import DataTableList from '../../../@core/components/table' 

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Bandeja = () => {

    const infoChart = dataInfoChart()

    return (
        <>
            <Row className='match-height'>
                {infoChart.map((dataInfoChart, index) => (
                    <Col lg='3' sm='6' key={index}>
                        <SubscribersGained kFormatter={kFormatter} dataInfoChart={dataInfoChart} />
                    </Col>
                ))}
            </Row>
            
            <DataTableList 
                columnsTable={columns}
                dataTable={null}
            />
        </>
    )
}

export default Bandeja
