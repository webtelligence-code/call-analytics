import React from 'react'
import { Card } from 'react-bootstrap'

import { CgMediaLive } from 'react-icons/cg';
import '../../styles/live.css'
import '../../styles/marquee.css'

const HeaderContainer = ({ lastUpdated }) => {
  return (
    <Card 
    className='mb-3'
    style={{
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0
    }}
    >
      <Card.Header
        as={'h5'}
        style={{
          backgroundColor: 'white',
          borderRadius: '5px',
          borderLeftWidth: 0
        }}
      >
        <div className='marquee'>
          <label>
            Última atualização: {lastUpdated} <CgMediaLive className='ms-2 icon' color='#c62828' />
          </label>
        </div>
      </Card.Header>
    </Card>
  )
}

export default HeaderContainer