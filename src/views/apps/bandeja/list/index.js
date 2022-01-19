import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'
import Select from 'react-select'

import { selectThemeColors } from '@utils'

import { columns } from './columns'
import DataTableList from './table'
import CardGrid from '../../../../@core/components/card-grid'
import ComponentSpinner from '../../../../@core/components/spinner/Loading-spinner'

import { getAllTicketsActions } from '../../../../redux/actions/zammad/tickets'
import { getAllRegionsActions } from '../../../../redux/actions/territories/regions'
import { territoriesLabel } from '../../../../constants/label/territories'
import {
  noOptionsMessageSelect,
  optionsCodeValueSelect,
} from '../../../../utility/Utils'
import { getProvincesByRegionActions } from '../../../../redux/actions/territories/provinces'
import { getMunicipalitiesByprovincesByRegionsActions } from '../../../../redux/actions/territories/municipalities'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { getAllTickets } from '../../../../services/zammad/ticket'
import { ticketNewObjectFiltered } from '../../../../utility/zammad/filterData'

const Bandeja = function() {
  const dispatch = useDispatch()

  const [ dataTableTickets, setDataTableTickets ] = useState([])
  console.log(dataTableTickets)

  useEffect(() => {
    // dispatch(getAllTicketsActions())
    getAllTickets()
      .then(res => {
        setDataTableTickets(
          ticketNewObjectFiltered(res.data.assets.Ticket, res.data.assets)
        )
      })

    dispatch(getAllRegionsActions())
  }, [dispatch])

  // const dataTableTickets = useSelector((state) => state?.tickets?.listTickets)

  const regionsSelector = useSelector((state) => state?.regions?.regions)
  const provincesSelector = useSelector((state) => state?.provinces?.provinces)
  const municipalitiesSelector = useSelector(
    (state) => state?.municipalities?.municipalities,
  )

  const defaultValueState = {value: '', label: 'Sin Seleccionar'}

  const [regionState, setRegionState] = useState(defaultValueState)
  const [provinciaState, setProvinciaState] = useState(defaultValueState)
  const [municipioState, setMunicipioState] = useState(defaultValueState)

  const [dataTable, setDataTable] = useState([])

  useEffect(() => {
    setDataTable(dataTableTickets)
  }, [dataTableTickets])

  const handleChangeRegions = ({ value, label }) => {
    if (value) {
      setRegionState({ value, label })
      filterTickets(value, 2)
    } else {
      setRegionState(defaultValueState)
      setProvinciaState(defaultValueState)
      setMunicipioState(defaultValueState)
      setDataTable(dataTableTickets)
    }

    dispatch(getProvincesByRegionActions(value))
  }

  const handleChangeProvinces = ({ value, label }) => {
    if (value) {
      setProvinciaState({ value, label })
      filterTickets(regionState.value + value, 4)
    } else {
      setProvinciaState(defaultValueState)
      setMunicipioState(defaultValueState)
      filterTickets(regionState.value, 2)
    }

    dispatch(
      getMunicipalitiesByprovincesByRegionsActions(regionState.value, value),
    )
  }

  const handleChangeMunicipalities = ({ value, label }) => {
    if (value) {
      setMunicipioState({ value, label })
      filterTickets(regionState.value + provinciaState.value + value, 6)
    } else {
      setMunicipioState(defaultValueState)
      filterTickets(regionState.value + provinciaState.value, 4)
    }
  }

  const filterTickets = (value, positionToFind = 0) => {
    const data = dataTableTickets.filter(
      (tickets) => tickets.zone.substr(0, positionToFind) === value,
    )
    setDataTable(data)
  }

  const searchTable = (data, queryLowered) =>
    data.filter(
      (data) =>
        (data.title || '').toLowerCase().includes(queryLowered) ||
        (data.address || '').toLowerCase().includes(queryLowered) ||
        (data.ownerFirstName || '').toLowerCase().includes(queryLowered) ||
        (data.ownerLastName || '').toLowerCase().includes(queryLowered) ||
        (data.ownerCedula || '').toLowerCase().includes(queryLowered) ||
        (data.customerFirstName || '').toLowerCase().includes(queryLowered) ||
        (data.customerLastName || '').toLowerCase().includes(queryLowered) ||
        (data.customerCedula || '').toLowerCase().includes(queryLowered) ||
        (data.institutionName || '').toLowerCase().includes(queryLowered) ||
        (data.institutionAcronym || '').toLowerCase().includes(queryLowered),
    )

  return dataTableTickets[0] ? (
    <>
      <CardGrid cardHeaderTitle="Búsqueda con filtro">
        <Row>
          <Col md="4">
            <Select
              theme={selectThemeColors}
              isClearable={false}
              className="react-select"
              classNamePrefix="select"
              value={regionState}
              options={optionsCodeValueSelect(regionsSelector)}
              onChange={handleChangeRegions}
              noOptionsMessage={({ inputValue }) =>
                noOptionsMessageSelect(
                  inputValue,
                  territoriesLabel.selectNoRegionsFound,
                )
              }
            />
          </Col>
          <Col md="4">
            <Select
              theme={selectThemeColors}
              isClearable={false}
              className="react-select"
              classNamePrefix="select"
              value={provinciaState}
              options={optionsCodeValueSelect(provincesSelector)}
              onChange={handleChangeProvinces}
              noOptionsMessage={({ inputValue }) =>
                noOptionsMessageSelect(
                  inputValue,
                  territoriesLabel.selectNoProvincesFound,
                )
              }
            />
          </Col>
          <Col md="4">
            <Select
              isClearable={false}
              theme={selectThemeColors}
              className="react-select"
              classNamePrefix="select"
              value={municipioState}
              options={optionsCodeValueSelect(municipalitiesSelector)}
              onChange={handleChangeMunicipalities}
              noOptionsMessage={({ inputValue }) =>
                noOptionsMessageSelect(
                  inputValue,
                  territoriesLabel.selectNoMunicipalitiesFound,
                )
              }
            />
          </Col>
        </Row>
      </CardGrid>

      {dataTable && (
        <DataTableList
          columnsTable={columns}
          dataTable={dataTable}
          searchTable={searchTable}
          showButtonAddReport
        />
      )}
    </>
  ) : (
    <ComponentSpinner />
  )
}

export default Bandeja
