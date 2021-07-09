import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { deleteInvoice } from '@src/views/apps/invoice/store/actions'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from 'reactstrap'

import {
  MoreVertical,
  Download,
  Edit,
  Trash,
  Copy
} from 'react-feather'

import { iconRoleTable } from '../../../@core/components/table/iconRoleTable'


// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-50' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color} className='mr-50' content={row.client ? row.client.name : 'John Doe'} initials />
  }
}

// ** Table columns
export const columnsTable = [
  {
    name: 'Nombre',
    minWidth: '300px',
    selector: 'client',
    sortable: true,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe'

      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
            <small className='text-truncate text-muted mb-0' style={{marginTop: '4px'}}>001-0001110-1</small>
          </div>
        </div>
      )
    }
  },
  {
    name: 'Teléfono',
    minWidth: '150px',
    selector: 'cliente',
    sortable: true,
    cell: row => '809-220-1111'
  },
  {
    name: 'Provincia',
    selector: 'total',
    sortable: true,
    minWidth: '200px',
    cell: row => 'Santo Domingo'
  },
  {
    name: 'Municipio',
    selector: 'total',
    sortable: true,
    minWidth: '200px',
    cell: row => 'Los Alcarrizos'
  },
  {
    name: 'Rol',
    selector: 'role',
    sortable: true,
    minWidth: '200px',
    cell: row => iconRoleTable(row)
  },
  {
    name: 'Acciones',
    minWidth: '50px',
    sortable: false,
    cell: row => (
        <UncontrolledDropdown>
            <DropdownToggle tag='div' className='btn btn-sm'>
                <MoreVertical size={14} className='cursor-pointer' />
            </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Download size={14} className='mr-50' />
              <span className='align-middle'>Descargar</span>
            </DropdownItem>
            <DropdownItem tag={Link} to={`/apps/invoice/edit/${row.id}`} className='w-100'>
              <Edit size={14} className='mr-50' />
              <span className='align-middle'>Editar</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={e => {
                e.preventDefault()
                store.dispatch(deleteInvoice(row.id))
              }}
            >
              <Trash size={14} className='mr-50' />
              <span className='align-middle'>Borrar</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Copy size={14} className='mr-50' />
              <span className='align-middle'>Duplicar</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
    )
  }
]
