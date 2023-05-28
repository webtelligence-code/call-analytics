import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { FcCallback, FcMissedCall, FcPhone } from 'react-icons/fc'

const CallsInfo = ({ calls }) => {
  return (
    <Row className='text-center'>
      <Col>
        {calls.recebidas ? (
          <h4 style={{ color: '#388e3c' }}>{calls.recebidas}</h4>
        ) : (
          <div>
            <Spinner style={{ color: '#388e3c' }}>
              <span className='visually-hidden'>A carregar...</span>
            </Spinner>
          </div>
        )}
        <label style={{ fontSize: 18 }}>Recebidas <FcPhone size={30} /></label>
      </Col>

      <Col>
        {calls.Devolvidas ? (
          <h4 style={{ color: '#42a5f5  ' }}>{calls.Devolvidas}</h4>
        ) : (
          <div>
            <Spinner style={{ color: '#42a5f5  ' }}>
              <span className='visually-hidden'>A carregar...</span>
            </Spinner>
          </div>
        )}
        <label style={{ fontSize: 18 }}>Devolvidas <FcCallback size={30} /></label>
      </Col>

      <Col>
        {calls.perdidas ? (
          <h4 style={{ color: '#c62828' }}>{calls.perdidas}</h4>
        ) : (
          <div>
            <Spinner>
              <span className='visually-hidden'>A carregar...</span>
            </Spinner>
          </div>
        )}
        <label style={{ fontSize: 18 }}>Perdidas <FcMissedCall size={30} /></label>
      </Col>

      <Col>
        {calls.efetuadas ? (
          <h4>{calls.efetuadas}</h4>
        ) : (
          <div>
            <Spinner>
              <span className='visually-hidden'>A carregar...</span>
            </Spinner>
          </div>
        )}
        <label style={{ fontSize: 18 }}>Efetuadas <FcPhone size={30} /></label>
      </Col>
    </Row>
  )
}

export default CallsInfo