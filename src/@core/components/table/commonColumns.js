import { Link } from 'react-router-dom'

import { Edit2 } from 'react-feather'
import { rolObj } from '../../../constants/Rol/rol'

import Avatar from '@components/avatar'

const renderClient = row => {
    const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

    if (row?.avatar?.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
    } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName || 'John Doe'} initials />
    }
}

export const rowClient = row => (
    <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
            <Link
                to={`/apps/user/view/${row.id}`}
                className='user-name text-truncate mb-0'
            >
                <span className='font-weight-bold'>{row.fullName ? row.fullName : 'John Doe'}</span>
            </Link>
            <small className='text-truncate text-muted mb-0' style={{marginTop: '4px'}}>001-0001110-1</small>
        </div>
    </div>
)

export const rowInstitution = row => (
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

export const iconRoleTable = rol => {

    const Icon = rolObj[rol] ? rolObj[rol].icon : Edit2
  
    return (
      <span className='text-truncate text-capitalize align-middle'>
        <Icon size={18} className={`${rolObj[rol] && rolObj[rol].classText } mr-50`} />
        {rol ? rol : 'No Definido'}
      </span>
    )
}