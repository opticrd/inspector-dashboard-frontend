import { Edit2 } from 'react-feather'
import { rolObj } from '../../../constants/Rol/rol'

export const iconRoleTable = rol => {

  const Icon = rolObj[rol] ? rolObj[rol].icon : Edit2

  return (
    <span className='text-truncate text-capitalize align-middle'>
      <Icon size={18} className={`${rolObj[rol] && rolObj[rol].classText } mr-50`} />
      {rol ? rol : 'No Definido'}
    </span>
  )
}