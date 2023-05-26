import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopContainer from './TopContainer'
import BottomContainer from './BottomContainer'
import SideContainer from './SideContainer'

const MainContainer = ({ calls }) => {

  console.log(calls)
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