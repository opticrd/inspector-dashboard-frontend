// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { Mail, User, Check, Phone, Globe } from 'react-feather'

const UserInfoCard = function({ selectedUser }) {
  // ** render user img
  const renderUserImg = () => {
    if (selectedUser !== null && selectedUser.avatar.length) {
      return (
        <img
          src={selectedUser.avatar}
          alt="user-avatar"
          className="img-fluid rounded"
          height="104"
          width="104"
        />
      )
    }
    const stateNum = Math.floor(Math.random() * 6)
    const states = [
      'light-success',
      'light-danger',
      'light-warning',
      'light-info',
      'light-primary',
      'light-secondary',
    ]
    const color = states[stateNum]
    return (
      <Avatar
        initials
        color={color}
        className="rounded"
        content={selectedUser.fullName}
        contentStyles={{
          borderRadius: 0,
          fontSize: 'calc(36px)',
          width: '100%',
          height: '100%',
        }}
        style={{
          height: '90px',
          width: '90px',
        }}
      />
    )
  }

  return (
    <Card>
      <CardBody>
        <Row>
          <Col
            xl="6"
            lg="12"
            className="d-flex flex-column justify-content-between border-container-lg"
          >
            <div className="user-avatar-section">
              <div className="d-flex justify-content-start">
                {renderUserImg()}
                <div className="d-flex flex-column ml-1">
                  <div className="user-info mb-1">
                    <h4 className="mb-0">
                      {selectedUser !== null
                        ? selectedUser.fullName
                        : 'Eleanor Aguilar'}
                    </h4>
                    <CardText tag="span">MOPC</CardText>
                  </div>
                  <div className="d-flex flex-wrap align-items-center">
                    <Button.Ripple
                      tag={Link}
                      to={`/apps/user/edit/${selectedUser.id}`}
                      color="primary"
                    >
                      Editar
                    </Button.Ripple>
                    <Button.Ripple className="ml-1" color="primary" outline>
                      Borrar
                    </Button.Ripple>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl="6" lg="12" className="mt-2 mt-xl-0">
            <div className="user-info-wrapper">
              <div className="d-flex flex-wrap align-items-center">
                <div className="user-info-title">
                  <Globe className="mr-1" size={14} />
                  <CardText
                    tag="span"
                    className="user-info-title font-weight-bold mb-0"
                  >
                    Página web
                  </CardText>
                </div>
                <CardText className="mb-0">
                  {selectedUser !== null
                    ? selectedUser.username
                    : 'eleanor.aguilar'}
                </CardText>
              </div>
              <div className="d-flex flex-wrap align-items-center my-50">
                <div className="user-info-title">
                  <Check className="mr-1" size={14} />
                  <CardText
                    tag="span"
                    className="user-info-title font-weight-bold mb-0"
                  >
                    Estado
                  </CardText>
                </div>
                <CardText className="text-capitalize mb-0">
                  {selectedUser !== null ? selectedUser.status : 'Active'}
                </CardText>
              </div>
              <div className="d-flex flex-wrap align-items-center my-50">
                <div className="user-info-title">
                  <Phone className="mr-1" size={14} />
                  <CardText
                    tag="span"
                    className="user-info-title font-weight-bold mb-0"
                  >
                    Contacto
                  </CardText>
                </div>
                <CardText className="text-capitalize mb-0">
                  {selectedUser !== null ? selectedUser.contact : 'Admin'}
                </CardText>
              </div>
              <div className="d-flex flex-wrap align-items-center my-50">
                <div className="user-info-title">
                  <Mail className="mr-1" size={14} />
                  <CardText
                    tag="span"
                    className="user-info-title font-weight-bold mb-0"
                  >
                    Email
                  </CardText>
                </div>
                <CardText className="mb-0">info@mopc.gob.do</CardText>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default UserInfoCard
