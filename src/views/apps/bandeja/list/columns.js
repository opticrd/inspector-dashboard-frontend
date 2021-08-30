// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import { StatusTickets } from '@components/status'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from 'reactstrap'
import { MoreVertical, FileText, Trash2, Archive } from 'react-feather'
import {
  rowClient,
  rowInstitution,
} from '../../../../@core/components/table/commonColumns'
import Url from '../../../../constants/Url'

// ** Third Party Components

export const columns = [
  {
    name: 'TÍTULO',
    minWidth: '220px',
    selector: 'fullName',
    sortable: true,
    cell: (row) => 'Reparación de calle',
  },
  {
    name: 'ESTADO',
    minWidth: '160px',
    selector: 'telephone',
    sortable: true,
    cell: (row) => StatusTickets('En progreso'),
  },
  {
    name: 'DIRECCIÓN',
    minWidth: '200px',
    selector: 'provincia',
    sortable: true,
    cell: (row) => '27 de Febrero #419',
  },
  {
    name: 'FECHA SLA',
    minWidth: '150px',
    selector: 'municipio',
    sortable: true,
    cell: (row) => '31/12/2020',
  },
  {
    name: 'REPORTERO',
    minWidth: '250px',
    selector: 'rol',
    sortable: true,
    cell: (row) => rowClient(row),
  },
  {
    name: 'INSTITUCIÓN',
    minWidth: '320px',
    selector: 'rol',
    sortable: true,
    cell: (row) => rowInstitution(row),
  },
  {
    name: 'Oficial',
    minWidth: '250px',
    selector: 'rol',
    sortable: true,
    cell: (row) => rowClient(row),
  },
  {
    name: 'PRIORIDAD',
    minWidth: '172px',
    selector: 'rol',
    sortable: true,
    cell: (row) => <Badge color="light-danger">Alta</Badge>,
  },
  {
    name: 'Acciones',
    minWidth: '50px',
    cell: (row) => (
      <UncontrolledDropdown>
        <DropdownToggle tag="div" className="btn btn-sm">
          <MoreVertical size={14} className="cursor-pointer" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`${Url.dashboardInbox}/${row.id}`}
            className="w-100"
          >
            <FileText size={14} className="mr-50" />
            <span className="align-middle">Detalles</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/apps/user/edit/${row.id}`}
            className="w-100"
          >
            <Archive size={14} className="mr-50" />
            <span className="align-middle">Editar</span>
          </DropdownItem>
          <DropdownItem className="w-100">
            <Trash2 size={14} className="mr-50" />
            <span className="align-middle">Borrar</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    ),
  },
]
