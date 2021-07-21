// ** React Imports
import { useState } from 'react'

// ** Columns
import { columns } from './columns'

// ** Third Party Components
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Row, Col } from 'reactstrap'

import DataTableList from '../../../../@core/components/table' 
import CardGrid from '../../../../@core/components/card-grid'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Reportero = () => {

  return (
    <DataTableList 
        columnsTable={columns}
        dataTable={null}
        dataTableTitle='Reportero'
        showButtonAdd={true}
    />
  )
}

export default Reportero
