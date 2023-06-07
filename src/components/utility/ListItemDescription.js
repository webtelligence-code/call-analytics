import { Badge, Space } from 'antd'
import React from 'react'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { FcCallback, FcMissedCall, FcPhone } from 'react-icons/fc'
import { IoIosCall } from 'react-icons/io'

const ListItemDescription = ({ total, recebidas, perdidas, devolvidas, nDevolvidas, efetuadas }) => {
  return (
    <Space>
      <label><IoIosCall size={20} color='green' /> <Badge count={total} color='#a3a2a2' showZero /></label>
      <label><FcPhone size={20} /> <Badge count={recebidas} color='#a3a2a2' showZero /></label>
      <label><FcMissedCall size={20} /> <Badge count={perdidas} color='#c62828' showZero /></label>
      <label><FcCallback size={20} /> <Badge count={devolvidas} color='#a3a2a2' showZero /></label>
      <label><BsFillTelephoneForwardFill size={20} color='#c62828' /> <Badge count={nDevolvidas} color='#a3a2a2' showZero /></label>
      <label><FcPhone size={20} color='#c62828' /> <Badge count={efetuadas} color='#a3a2a2' showZero /></label>
    </Space>
  )
}

export default ListItemDescription