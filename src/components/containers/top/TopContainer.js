import { Badge, Popover } from 'antd';
import React, { useState } from 'react'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import { FcMissedCall, FcPhone, FcCallback } from "react-icons/fc";
import CallsInfo from './CallsInfo';
import Charts from './Charts';

const TopContainer = ({ calls }) => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Card className='mb-3 shadow'>
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
        Todas as chamadas
        <Badge size='large' className='ms-2' count={calls.total} showZero overflowCount={calls.total} color="#ed6337" />
      </Card.Header>
      <Card.Body>
        <CallsInfo calls={calls}/>
        <Charts calls={calls} />
      </Card.Body>
      <Card.Footer>
        <Row className='text-center'>
          <Col>
            <Popover
              content={<a onClick={hide}>Close</a>}
              title="Title"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <button type="primary">Click me</button>
            </Popover>
          </Col>
          <Col>
            <Popover
              content={<a onClick={hide}>Close</a>}
              title="Title"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <button type="primary">Click me</button>
            </Popover>
          </Col>
          <Col>
            <Popover
              content={<a onClick={hide}>Close</a>}
              title="Title"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <button type="primary">Click me</button>
            </Popover>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default TopContainer