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
        <Col lg={12} xl={8} className='align-items-between'>
          <TopContainer calls={calls} />
          <BottomContainer calls={calls} />
        </Col>
        <Col lg={12} xl={4}>
          <SideContainer extensoes={calls.Extensoes} />
        </Col>
      </Row>
    </Container>
  )
}

export default MainContainer