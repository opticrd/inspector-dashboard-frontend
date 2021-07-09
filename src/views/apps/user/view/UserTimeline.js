// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'

// ** Images
import pdf from '@src/assets/images/icons/file-icons/pdf.png'

// ** Third Party Components
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

// ** Timeline Data
const data = [
  {
    title: 'Creó Caso: Reparación Calle',
    content: 'Luis F Thomen #1442, El Millón',
    meta: '12 min ago',
    customContent: (
      <Media className='align-items-center'>
        <img className='mr-1' src={pdf} alt='pdf' height='23' />
        <Media body>Pruebas.pdf</Media>
      </Media>
    )
  },
  {
    title: 'Creó Caso: Reparación Calle',
    content: 'Luis F Thomen #1442, El Millón',
    meta: '45 min ago',
    color: 'warning',
    customContent: (
      <Media className='align-items-center'>
        <img className='mr-1' src={pdf} alt='pdf' height='23' />
        <Media body>Pruebas.pdf</Media>
      </Media>
    )
  },
  {
    title: 'Creó Caso: Reparación Calle',
    content: 'Luis F Thomen #1442, El Millón',
    meta: '2 days ago',
    color: 'info'
  }
]

const UserTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4' className='mb-2'>
          Línea de Tiempo
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Timeline data={data} />
      </CardBody>
    </Card>
  )
}

export default UserTimeline
