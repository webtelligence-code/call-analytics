import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopContainer from './top/TopContainer'
import BottomContainer from './bottom/BottomContainer'
import SideContainer from './side/SideContainer'

const MainContainer = ({ calls }) => {
  return (
    <Container fluid className='p-3'>
      <Row>
        <Col xs={9}>
          <TopContainer calls={calls} />
          <BottomContainer />
        </Col>
        <Col>
          <SideContainer />
        </Col>
      </Row>
    </Container>
  )
}

export default MainContainer