// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { User, MapPin } from 'react-feather'
import 'cleave.js/dist/addons/cleave-phone.us'
import { useForm, Controller } from 'react-hook-form'
import { Row, Col, Button, Label, FormGroup, Input, CustomInput, Form } from 'reactstrap'

import { rolArray } from '../../../../constants/Rol/rol'
import CardGrid from '../../../../@core/components/card-grid'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const UserCreate = () => {
  // ** State
  const [data, setData] = useState(null)

  // ** React hook form vars
  const { register, errors, handleSubmit, control, setValue, trigger } = useForm({
    defaultValues: { gender: 'gender-female', dob: null }
  })

  return (
    <CardGrid 
        cardHeaderTitle='Añadir Nuevo Usuario'
    >
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
                <Col lg='4' md='6' sm='12'>
                <FormGroup>
                    <Label for='role'>Rol</Label>
                    <Input type='select' name='role' id='role' defaultValue="Admin">
                    {rolArray.map((rolArray, index) => (
                        <option value={rolArray} key={index}>{rolArray}</option>
                    ))}
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
                    <Input 
                        type='text' 
                        name='nacionalidad' 
                        id='nacionalidad' 
                        defaultValue='809-220-1111' 
                    />
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
                    <Label for='nacionalidad'>Nacionalidad</Label>
                    <Input type='select' name='nacionalidad' id='nacionalidad' defaultValue='Dominicana'>
                    <option value='Dominicana'>Dominicana</option>
                    </Input>
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
                            onChange={() => setValue('gender', 'Femenino')}
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
                    <span className='align-middle'>Su Zona de Trabajo</span>
                </h4>
                </Col>
                <Col lg='4' md='6'>
                <FormGroup>
                    <Label for='Provincia'>Provincia</Label>
                    <Input type='select' name='Provincia' id='Provincia'>
                        <option value=''>Seleccione</option>
                    </Input>
                </FormGroup>
                </Col>
                <Col lg='4' md='6'>
                <FormGroup>
                    <Label for='Municipio'>Municipio</Label>
                    <Input type='select' name='Municipio' id='Municipio'>
                        <option value=''>Seleccione</option>
                    </Input>
                </FormGroup>
                </Col>
                <Col lg='4' md='6'>
                <FormGroup>
                    <Label for='DistritoMunicipal'>Distrito Municipal</Label>
                    <Input type='select' name='DistritoMunicipal' id='DistritoMunicipal'>
                        <option value=''>Seleccione</option>
                    </Input>
                </FormGroup>
                </Col>
                <Col lg='4' md='6'>
                <FormGroup>
                    <Label for='Sección'>Sección</Label>
                    <Input type='select' name='Sección' id='Sección'>
                        <option value=''>Seleccione</option>
                    </Input>
                </FormGroup>
                </Col>
                <Col lg='4' md='6'>
                <FormGroup>
                    <Label for='BarrioParaje'>Barrio/Paraje</Label>
                    <Input type='select' name='BarrioParaje' id='BarrioParaje'>
                        <option value=''>Seleccione</option>
                    </Input>
                </FormGroup>
                </Col>
                <Col lg='4' md='6'>
                <FormGroup>
                    <Label for='SubBarrio'>Sub Barrio</Label>
                    <Input type='select' name='SubBarrio' id='SubBarrio'>
                        <option value=''>Seleccione</option>
                    </Input>
                </FormGroup>
                </Col>
                <Col className='d-flex flex-sm-row flex-column mt-2'>
                <Button type='submit' color='primary' className='mb-1 mb-sm-0 mr-0 mr-sm-1'>
                    Crear
                </Button>
                <Button type='reset' color='primary' outline>
                    Limpiar
                </Button>
                </Col>
            </Row>
        </Form>
    </CardGrid>
  )
}
export default UserCreate
