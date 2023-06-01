import React from 'react'
import Charts from '../utility/Charts'
import { Card, Spinner } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';
import { Badge } from 'antd';
import { IoIosCall } from 'react-icons/io';
import CallsInfo from '../utility/CallsInfo';

const BottomContainer = ({ calls }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 }); // Defauld bootstrap value

  return (
    <Card className={`shadow text-center ${isSmallScreen ? 'mb-3' : ''}`} style={{ width: '100%' }}>
      <Badge.Ribbon
        placement='end'
        text={
          calls.totalInternas ? (
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IoIosCall className='me-2' size={20} />
              {calls.totalInternas}
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
          Chamadas Internas
        </Card.Header>
      </Badge.Ribbon>
      <Card.Body>
        <CallsInfo
          recebidas={calls.recebidasInternas}
          devolvidas={null}
          nDevolvidas={null}
          perdidas={calls.perdidasInternas}
          efetuadas={calls.efetuadasInternas}
          show={[true, false, false, true, true]}
        />
        {calls.totalInternas && (
          <Charts
          show={[false, false, true, true, false]}
          recebidas={calls.recebidasInternas}
          devolvidas={calls.DevolvidasInternas}
          nDevolvidas={calls.NDevolvidasInternas}
          perdidas={calls.perdidasInternas}
          efetuadas={calls.efetuadasInternas}
          total={calls.totalInternas}
        />
        )}
      </Card.Body>
    </Card>
  )
}

export default BottomContainer