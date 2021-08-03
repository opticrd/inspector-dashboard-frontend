import { Link } from 'react-router-dom'

// ** Reactstrap
import { Alert } from 'reactstrap'
import Url from '../../../constants/Url'

export const UserNotFound = ({id = 0}) => (
    <Alert color='danger'>
        <h4 className='alert-heading'>Usuario no encontrado</h4>
        <div className='alert-body'>
            El usuario con id: {id} no existe. <Link to={Url.user}>Lista de usuarios</Link>
        </div>
    </Alert>
)