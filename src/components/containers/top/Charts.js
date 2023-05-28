import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PieChart } from 'react-minimal-pie-chart';



const Charts = ({ calls }) => {

  const totalCalls = calls.recebidas + (calls.total - calls.recebidas);
  const recebidasPercentage = (calls.recebidas / totalCalls) * 100;
  const totalPercentage = ((calls.total - calls.recebidas) / totalCalls) * 100;

  const data = [
    { title: 'Recebidas', value: recebidasPercentage, color: '#388e3c' },
    { title: 'Total', value: totalPercentage, color: 'red' },
  ];

  return (
    <Row>
      <Col xs={3}>
        <div style={{ padding: 50 }}>
          <PieChart
            data={data}
            animate={false}
            lineWidth={60}
            label={({ dataEntry }) => dataEntry.label}
            labelPosition={112}
            labelStyle={{
              fontSize: '5px',
              fontFamily: 'sans-serif',
              fill: '#fff',
            }}
            viewBoxSize={[100, 100]}
            totalValue={100}
          />
        </div>

      </Col>

      <Col>

      </Col>

      <Col>

      </Col>

      <Col>

      </Col>
    </Row>
  )
}

export default Charts