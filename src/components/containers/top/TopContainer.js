import { Badge } from 'antd';
import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import CallsInfo from './CallsInfo';
import { IoIosCall } from "react-icons/io";
import Charts from './Charts';

const TopContainer = ({ calls }) => {
  return (
    <Card
      className='mb-3 shadow'
      style={{ width: '100%' }}
    >
      <Badge.Ribbon
        placement='end'
        text={
          calls.totalExternos ? (
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IoIosCall className='me-2' size={20} />
              {calls.totalExternos}
            </label>
          ) : (
            <Spinner style={{ color: 'white' }} size='sm'>
              <span className='visually-hidden'>A carregar...</span>
            </Spinner>
          )
        }
        color='#ed6337'
      >
        <Card.Header
          className='text-center shadow-sm'
          style={{
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            backgroundColor: 'white',
          }}
          as={'h5'}
        >
          Chamadas Externas
        </Card.Header>
      </Badge.Ribbon>

      <Card.Body>
        <CallsInfo
          recebidas={calls.recebidas}
          devolvidas={null}
          nDevolvidas={null}
          perdidas={calls.perdidas}
          efetuadas={calls.efetuadas}
          show={[true, false, false, true, true]}
        />
        <Charts calls={calls} show={[false, false, true, true, false]} />
      </Card.Body>
    </Card >
  )
}

export default TopContainer