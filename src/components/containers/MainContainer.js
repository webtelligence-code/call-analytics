import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopContainer from './top/TopContainer'
import BottomContainer from './bottom/BottomContainer'
import SideContainer from './side/SideContainer'
import HeaderContainer from './header/HeaderContainer'

const MainContainer = ({ calls, lastUpdated }) => {
  if (lastUpdated) console.log('Last updated:', lastUpdated);

  return (
    <Container fluid className='p-3'>
      <Row>
        <Col xs={12}>
          <HeaderContainer lastUpdated={lastUpdated} />
        </Col>
        <Col xs={12} md={9}>
          <TopContainer calls={calls} />
          <BottomContainer calls={calls} />
        </Col>
        <Col>
          <SideContainer />
        </Col>
      </Row>
    </Container>
  )
}

export default MainContainer