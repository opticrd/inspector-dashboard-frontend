import { columns } from './columns'

import DataTableList from '../../../../@core/components/table'

import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Reportero = function() {
  return <DataTableList
    columnsTable={columns}
    dataTable={null}
    dataTableTitle="Reportero"
    showButtonAdd
  />
}

export default Reportero
