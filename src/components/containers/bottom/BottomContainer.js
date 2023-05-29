import React from 'react'
import Charts from '../top/Charts'
import { Card, Spinner } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';
import { Badge } from 'antd';
import { IoIosCall } from 'react-icons/io';

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
      </Card.Body>
    </Card>
  )
}

export default BottomContainer