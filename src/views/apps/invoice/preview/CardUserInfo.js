import Avatar from '@components/avatar'
import coverImg from '@src/assets/images/banner/banner-12.jpg'
import { Card, CardBody, CardImg, Badge, Col, CardText } from 'reactstrap'
import profileImg from '@src/assets/images/portrait/small/avatar-s-9.jpg'

const CardProfile = () => {
  return (
    <Card className='card-profile'>
      <CardImg className='img-fluid' src={coverImg} top />
      <CardBody>
      <Col xl='6' lg='12' className='d-flex flex-column justify-content-between border-container-lg'>
            <div className='user-avatar-section'>
              <div className='d-flex justify-content-start'>
              <Avatar img={profileImg} />
                <div className='d-flex flex-column ml-1'>
                  <div className='user-info mb-1'>
                    <h4 className='mb-0'>mm</h4>
                    <CardText tag='span'>
                          MOPC
                    </CardText>
                  </div>

                </div>
              </div>
            </div>
          </Col>
         
        <div className='profile-image-wrapper'>
          <div className='profile-image'>
            <Avatar img={profileImg} />
          </div>
        </div>
        <h3>Curtis Stone</h3>
        <h6 className='text-muted'>Malaysia</h6>
        <Badge className='profile-badge' color='light-primary'>
          Pro Level
        </Badge>
        <hr className='mb-2' />
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <h6 className='text-muted font-weight-bolder'>Followers</h6>
            <h3 className='mb-0'>10.3k</h3>
          </div>
          <div>
            <h6 className='text-muted font-weight-bolder'>Projects</h6>
            <h3 className='mb-0'>156</h3>
          </div>
          <div>
            <h6 className='text-muted font-weight-bolder'>Rank</h6>
            <h3 className='mb-0'>23</h3>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardProfile
