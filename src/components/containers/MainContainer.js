import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeaderContainer from './HeaderContainer';
import TopContainer from './TopContainer';
import BottomContainer from './BottomContainer';
import SideContainer from './SideContainer';

const MainContainer = ({ calls, lastUpdated }) => {
  return (
    <Container fluid className='p-3'>
      <Row>
        {lastUpdated && (
          <Col xs={12}>
            <HeaderContainer lastUpdated={lastUpdated} />
          </Col>
        )}
        <Col xs={12} md={9}>
          <TopContainer calls={calls} />
          <BottomContainer calls={calls} />
        </Col>
        <Col>
          <SideContainer extensoes={calls.Extensoes} />
        </Col>
      </Row>
    </Container>
  )
}

export default MainContainer