import { Link } from 'react-router-dom'

// ** Reactstrap
import { Alert } from 'reactstrap'

export const UserNotFound = ({id = 0}) => (
    <Alert color='danger'>
        <h4 className='alert-heading'>Usuario no encontrado</h4>
        <div className='alert-body'>
            El usuario con id: {id} no existe. Lista de verificación de todos los usuarios: <Link to='/apps/user/list'>Lista de usuarios</Link>
        </div>
    </Alert>
)