import React from 'react'
import { Card } from 'react-bootstrap'

import { CgMediaLive } from 'react-icons/cg';
import '../../../styles/live.css'

const HeaderContainer = ({ lastUpdated }) => {
  return (
    <Card className='mb-3 shadow'>
      <Card.Header
        as={'h5'}
        style={{
          backgroundColor: 'white',
          borderRadius: '5px'
        }}
      >
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >Última atualização: {lastUpdated} <CgMediaLive className='ms-2 icon' color='#c62828' /></label>
      </Card.Header>
    </Card>
  )
}

export default HeaderContainer