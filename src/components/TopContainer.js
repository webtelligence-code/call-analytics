import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { FcMissedCall, FcPhone } from "react-icons/fc";

const TopContainer = ({ calls }) => {
  return (
    <Card>
      <Card.Header
        className='text-center'
        style={{
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5
        }}
        as={'h5'}
      >
        Total de chamadas ({calls.total})
      </Card.Header>
      <Card.Body>
        <Row className='text-center'>
          <Col>
            <h4>{calls.recebidas}</h4>
            <label style={{ fontSize: 18 }}>Recebidas <FcPhone size={30} /></label>
          </Col>
          <Col>
            <h4>{calls.Devolvidas}</h4>
            <label style={{ fontSize: 18 }}>Devolvidas <FcMissedCall size={30} /></label>
          </Col>
          <Col>
            <h4>{calls.perdidas}</h4>
            <label style={{ fontSize: 18 }}>Perdidas <FcMissedCall size={30} /></label>
          </Col>
          <Col>
            <h4>{calls.efetuadas}</h4>
            <label style={{ fontSize: 18 }}>Efetuadas <FcMissedCall size={30} /></label>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default TopContainer