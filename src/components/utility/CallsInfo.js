import React, { Fragment } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { FcCallback, FcMissedCall, FcPhone } from 'react-icons/fc'

const CallsInfo = ({ recebidas, devolvidas, nDevolvidas, perdidas, efetuadas, show }) => {
  return (
    <Row className='text-center'>
      {show[0] && (
        <Col>
          {recebidas >= 0 ? (
            <Fragment>
              <h4 style={{ color: '#388e3c' }}>{recebidas} <FcPhone size={30} /></h4>

            </Fragment>
          ) : (
            <div>
              <Spinner style={{ color: '#388e3c' }}>
                <span className='visually-hidden'>A carregar...</span>
              </Spinner>
            </div>
          )}
          <label style={{ fontSize: 16 }}>Chamadas Recebidas </label>
        </Col>
      )}

      {show[1] && (
        <Col>
          {devolvidas >= 0 ? (
            <Fragment>
              <h4 style={{ color: '#42a5f5' }}>{devolvidas} <FcCallback size={30} /></h4>

            </Fragment>
          ) : (
            <div>
              <Spinner style={{ color: '#42a5f5' }}>
                <span className='visually-hidden'>A carregar...</span>
              </Spinner>
            </div>
          )}
          <label style={{ fontSize: 16 }}>Contactos devolvidos </label>
        </Col>
      )}

      {show[2] && (
        <Col>
          {nDevolvidas >= 0 ? (
            <Fragment>
              <h4 style={{ color: '#42a5f5' }}>{nDevolvidas} <FcCallback size={30} /></h4>

            </Fragment>
          ) : (
            <div>
              <Spinner style={{ color: '#42a5f5' }}>
                <span className='visually-hidden'>A carregar...</span>
              </Spinner>
            </div>
          )}
          <label style={{ fontSize: 16 }}>Contactos não devolvidos </label>
        </Col>
      )}

      {show[3] && (
        <Col>
          {perdidas >= 0 ? (
            <div className='lost-calls-container'>
              <h4 style={{ color: 'white', fontWeight: 'bold' }}>{perdidas} <FcMissedCall size={30} /></h4>
            </div>
          ) : (
            <div>
              <Spinner style={{ color: '#c62828'}}>
                <span className='visually-hidden'>A carregar...</span>
              </Spinner>
            </div>
          )}
          <label style={{ fontSize: 16 }}>Chamadas perdidas </label>
        </Col>
      )}

      {show[4] && (
        <Col>
          {efetuadas >= 0 ? (
            <Fragment>
              <h4 style={{ color: '#388e3c' }}>{efetuadas} <FcPhone size={30} /></h4>

            </Fragment>
          ) : (
            <div>
              <Spinner style={{ color: '#388e3c' }}>
                <span className='visually-hidden'>A carregar...</span>
              </Spinner>
            </div>
          )}
          <label style={{ fontSize: 16 }}>Chamadas efetuadas </label>
        </Col>
      )}
    </Row>
  )
}

export default CallsInfo