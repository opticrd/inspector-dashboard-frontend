// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { User, MapPin } from 'react-feather'
import 'cleave.js/dist/addons/cleave-phone.us'
import { useForm, Controller } from 'react-hook-form'
import { Row, Col, Button, Label, FormGroup, Input, CustomInput, Form } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const UserInfoTab = () => {
  // ** State
  const [data, setData] = useState(null)

  // ** React hook form vars
  const { register, errors, handleSubmit, control, setValue, trigger } = useForm({
    defaultValues: { gender: 'gender-female', dob: null }
  })

  return (
    <Form
      onSubmit={handleSubmit(data => {
        trigger()
        setData(data)
      })}
    >
      <Row className='mt-1'>
        <Col sm='12'>
          <h4 className='mb-1'>
            <User size={20} className='mr-50' />
            <span className='align-middle'>Información Personal</span>
          </h4>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label className='d-block' for='dob'>
              Cédula de Identidad
            </Label>
            <Input
              type='text'
              id='state'
              defaultValue='001-0000000-0'
              placeholder='Cédula de Identidad'
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='mobileNumber'>Nombre Completo</Label>
            <Input
              type='text'
              id='state'
              defaultValue='John Doe'
              placeholder='Nombre Completo'
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='nacionalidad'>Nacionalidad</Label>
            <Input type='select' name='nacionalidad' id='nacionalidad' defaultValue='Dominicana'>
              <option value='Dominicana'>Dominicana</option>
            </Input>
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='languages'>Fecha de Nacimiento</Label>
            <Controller
              id='dob'
              name='dob'
              as={Flatpickr}
              control={control}
              placeholder='DD-MM-YYYY'
              options={{ dateFormat: 'd-m-y' }}
              className={classnames('form-control', {
                'is-invalid': errors.dob
              })}
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='nacionalidad'>Teléfono Móvil</Label>
            <Input type='select' name='nacionalidad' id='nacionalidad' defaultValue='809-220-1111'>
              <option value='809-220-1111'>809-220-1111</option>
            </Input>
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='mobileNumber'>Correo Electrónico</Label>
            <Input
              type='email'
              id='state'
              defaultValue='johndoe@email.com'
              placeholder='Correo Electrónico'
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <label className='d-block mb-1'>Género</label>
            <FormGroup>
              <Controller
                name='gender'
                control={control}
                render={props => {
                  return (
                    <CustomInput
                      inline
                      type='radio'
                      label='Masculino'
                      value='Masculino'
                      id='gender-male'
                      name={props.name}
                      invalid={data !== null && (data.gender === undefined || data.gender === null)}
                      onChange={() => setValue('gender', 'Masculino')}
                    />
                  )
                }}
              />
              <Controller
                name='gender'
                control={control}
                render={props => {
                  return (
                    <CustomInput
                      inline
                      type='radio'
                      label='Femenino'
                      value='Femenino'
                      id='gender-female'
                      name={props.name}
                      defaultChecked
                      invalid={data !== null && (data.gender === undefined || data.gender === null)}
                      onChange={() => setValue('gender', 'Femenino')}
                    />
                  )
                }}
              />
              <Controller
                name='gender'
                control={control}
                render={props => {
                  return (
                    <CustomInput
                      inline
                      type='radio'
                      label='Otro'
                      value='Otro'
                      id='gender-other'
                      name={props.name}
                      invalid={data !== null && (data.gender === undefined || data.gender === null)}
                      onChange={() => setValue('gender', 'Otro')}
                    />
                  )
                }}
              />
            </FormGroup>
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <label className='d-block mb-1'>Opciones de Contacto</label>
            <FormGroup>
              <CustomInput
                inline
                type='checkbox'
                name='terms'
                id='emailTerms'
                value='Correo'
                label='Correo'
                defaultChecked
              />
              <CustomInput
                inline
                type='checkbox'
                name='terms'
                id='msgTerms'
                value='Mensajes'
                label='Mensajes'
                defaultChecked
              />
              <CustomInput 
                inline 
                type='checkbox' 
                name='terms' 
                id='phoneTerms' 
                value='Teléfono' 
                label='Teléfono' 
              />
            </FormGroup>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <h4 className='mb-1 mt-2'>
            <MapPin size={20} className='mr-50' />
            <span className='align-middle'>Dirección</span>
          </h4>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='address-1'>Dirección Línea 1</Label>
            <Input
              type='text'
              id='state'
              defaultValue='A-65 Belvedere Streets'
              placeholder='Dirección Línea 1'
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='address-2'>Dirección Línea 2</Label>
            <Input 
              placeholder='Dirección Línea 2'
              id='address-2' 
              name='address-2' 
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='postcode'>Código Postal</Label>
            <Input
              id='postcode'
              name='postcode'
              placeholder='597626'
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='city'>Provincia</Label>
            <Input 
              defaultValue='Manhattan' 
              placeholder='Manhattan' 
              id='city' 
              name='city' 
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='state'>Municipio</Label>
            <Input
              defaultValue='New York'
              placeholder='Municipio'
              id='state'
              name='state'
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='country'>Sector</Label>
            <Input
              defaultValue='El millon'
              placeholder='Sector'
              id='country'
              name='country'
            />
          </FormGroup>
        </Col>
        <Col className='d-flex flex-sm-row flex-column mt-2'>
          <Button type='submit' color='primary' className='mb-1 mb-sm-0 mr-0 mr-sm-1'>
            Guardar Cambios
          </Button>
          <Button type='reset' color='primary' outline>
            Limpiar
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
export default UserInfoTab
