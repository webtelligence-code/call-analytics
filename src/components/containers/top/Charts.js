import { Empty } from 'antd';
import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import { VictoryPie } from 'victory';



const Charts = ({ calls, show }) => {

  // Chamadas Recebidas
  const chamadasRecebidas = () => {
    const totalCalls = calls.recebidas + (calls.total - calls.recebidas);
    const recebidasPercentage = (calls.recebidas / totalCalls) * 100;
    const totalPercentage = ((calls.total - calls.recebidas) / totalCalls) * 100;

    const data = [
      { x: 'Recebidas', y: recebidasPercentage },
      { x: 'Total', y: totalPercentage },
    ];

    return data
  }

  // Chamadas Devolvidas
  const chamadasDevolvidas = () => {
    const totalCalls = calls.Devolvidas + (calls.perdidas - calls.Devolvidas);
    const devolvidasPercentage = (calls.Devolvidas / totalCalls) * 100;
    const totalPercentage = ((calls.perdidas - calls.Devolvidas) / totalCalls) * 100;

    const data = [
      { x: 'Recebidas', y: devolvidasPercentage },
      { x: 'Total', y: totalPercentage },
    ];

    return data
  }

  // Chamadas Não Devolvidas
  const chamadasNDevolvidas = () => {
    const totalCalls = calls.NDevolvidas + (calls.perdidas - calls.NDevolvidas);
    const nDevolvidasPercentage = (calls.NDevolvidas / totalCalls) * 100;
    const totalPercentage = ((calls.perdidas - calls.NDevolvidas) / totalCalls) * 100;

    const data = [
      { x: 'Recebidas', y: nDevolvidasPercentage },
      { x: 'Total', y: totalPercentage },
    ];

    return data
  }

  // Chamadas Perdidas
  const chamadasPerdidas = () => {
    const totalCalls = calls.perdidas + (calls.total - calls.perdidas);
    const perdidasPercentage = (calls.perdidas / totalCalls) * 100;
    const totalPercentage = ((calls.total - calls.perdidas) / totalCalls) * 100;

    const data = [
      { x: 'Recebidas', y: perdidasPercentage },
      { x: 'Total', y: totalPercentage },
    ];

    return data
  }

  // Chamadas Efetuadas
  const chamadasEfetuadas = () => {
    const totalCalls = calls.efetuadas + (calls.total - calls.efetuadas);
    const efetuadasPercentage = (calls.efetuadas / totalCalls) * 100;
    const totalPercentage = ((calls.total - calls.efetuadas) / totalCalls) * 100;

    const data = [
      { x: 'Recebidas', y: efetuadasPercentage },
      { x: 'Total', y: totalPercentage },
    ];

    return data
  }

  return (
    calls ? (
      <Row className='justify-content-around'>
        {show[0] && (
          <Col >
            <VictoryPie
              origin={{ y: 250 }}
              data={chamadasRecebidas()}
              innerRadius={80}
              colorScale={['#388e3c', '#e6e6e6']}
              startAngle={-90}
              endAngle={90}
              labelComponent={<Fragment />} // If Frafgment provided then labels will not be rendered
            />
          </Col>
        )}

        {show[1] && (
          <Col>
            <VictoryPie
              origin={{ y: 250 }}
              data={chamadasDevolvidas()}
              innerRadius={80}
              colorScale={['#42a5f5', '#e6e6e6']}
              startAngle={-90}
              endAngle={90}
              labelComponent={<Fragment />} // If Frafgment provided then labels will not be rendered
            />
          </Col>
        )}

        {show[2] && (
          <Col xs={2}>
            <VictoryPie
              origin={{ y: 250 }}
              data={chamadasNDevolvidas()}
              innerRadius={80}
              colorScale={['#42a5f5', '#e6e6e6']}
              startAngle={-90}
              endAngle={90}
              labelComponent={<Fragment />} // If Frafgment provided then labels will not be rendered
            />
          </Col>
        )}

        {show[3] && (
          <Col xs={2}>
            <VictoryPie
              origin={{ y: 250 }}
              data={chamadasPerdidas()}
              innerRadius={80}
              colorScale={['#c62828', '#e6e6e6']}
              startAngle={-90}
              endAngle={90}
              labelComponent={<Fragment />} // If Frafgment provided then labels will not be rendered
            />
          </Col>
        )}

        {show[4] && (
          <Col>
            <VictoryPie
              origin={{ y: 250 }}
              data={chamadasEfetuadas()}
              innerRadius={80}
              colorScale={['#388e3c', '#e6e6e6']}
              startAngle={-90}
              endAngle={90}
              labelComponent={<Fragment />} // If Frafgment provided then labels will not be rendered
            />
          </Col>
        )}
      </Row>
    ) : (
      <Empty description={'Dados indisponíveis'} />
    )
  )
}

export default Charts