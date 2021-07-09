import { Slack, User, Settings, Database, Edit2 } from 'react-feather'


// ** Renders Role Columns
export const iconRoleTable = row => {

    console.log(row)

    const roleObj = {
      subscriber: {
        class: 'text-primary',
        icon: User
      },
      maintainer: {
        class: 'text-success',
        icon: Database
      },
      editor: {
        class: 'text-info',
        icon: Edit2
      },
      author: {
        class: 'text-warning',
        icon: Settings
      },
      admin: {
        class: 'text-danger',
        icon: Slack
      }
    }
  
    const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2
  
    return (
        <span className='text-truncate text-capitalize align-middle'>
            <Icon size={18} className={`${roleObj[row.role] && roleObj[row.role].class } mr-50`} />
            {row.role ? row.role : 'No Definido'}
        </span>
    )
  }