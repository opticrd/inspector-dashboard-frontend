// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'


// ** Third Party Components
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, FileText, Trash2, Archive } from 'react-feather'

import { iconRoleTable } from '../../../../../@core/components/table/iconRoleTable'

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row?.avatar?.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName || 'M A P'} initials />
  }
}

export const columns = [
  {
    name: 'Institución',
    minWidth: '360px',
    selector: 'institucion',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        <div className='d-flex flex-column'>
          <Link
            to={`/apps/user/instituciones/${row.id}`}
            className='user-name text-truncate mb-0'
          >
            <span className='font-weight-bold'>MOPC</span>
          </Link>
          <small className='text-muted mb-0' style={{marginTop: '4px'}}>Ministerio de Obras Públicas y Comunicaciones</small>
        </div>
      </div>
    )
  },
  {
    name: 'Teléfono',
    minWidth: '160px',
    selector: 'telephone',
    sortable: true,
    // cell: row => row.telephone
    cell: row => '809-220-1111'
  },
  {
    name: 'Provincia',
    minWidth: '235px',
    selector: 'provincia',
    sortable: true,
    // cell: row => row.provincia
    cell: row => 'Santo Domingo'
  },
  {
    name: 'Municipio',
    minWidth: '235px',
    selector: 'municipio',
    sortable: true,
    // cell: row => row.municipio
    cell: row => 'Los Alcarrizos'
  },
  {
    name: 'DIRECCIÓN',
    minWidth: '172px',
    selector: 'direccion',
    sortable: true,
    cell: row => '27 de Febrero #419'
  },
  {
    name: 'Acciones',
    minWidth: '50px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`/apps/user/instituciones/${row.id}`}
            className='w-100'
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Detalles</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/apps/user/instituciones/${row.id}`}
            className='w-100'
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Editar</span>
          </DropdownItem>
          <DropdownItem className='w-100'>
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Borrar</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]