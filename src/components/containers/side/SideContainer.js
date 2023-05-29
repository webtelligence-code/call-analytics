import { Empty } from 'antd'
import React from 'react'
import { Card } from 'react-bootstrap'

const SideContainer = () => {
  return (
    <Card className='shadow' style={{ height: '100%' }}>
      <Card.Header
        className='text-center shadow-sm'
        style={{
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          alignItems: 'center',
          backgroundColor: 'white',
        }}
        as={'h5'}
      >
        Extensões
      </Card.Header>
      <Card.Body>
        <Empty description='Secção temporariamente indisponível' />
      </Card.Body>
    </Card>
  )
}

export default SideContainer