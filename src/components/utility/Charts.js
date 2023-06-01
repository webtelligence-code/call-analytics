import { Empty } from 'antd';
import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import { VictoryPie } from 'victory';



const Charts = ({ show, recebidas, devolvidas, nDevolvidas, perdidas, efetuadas, total }) => {

  // Chamadas Recebidas
  const chamadasRecebidas = () => {
    const totalCalls = recebidas + (total - recebidas);
    const recebidasPercentage = (recebidas / totalCalls) * 100;
    const totalPercentage = ((total - recebidas) / totalCalls) * 100;

    const data = [
      { x: 'Recebidas', y: recebidasPercentage },
      { x: 'Total', y: totalPercentage },
    ];

    return data;
  }

  // Chamadas Devolvidas
  const chamadasDevolvidas = () => {
    const totalCalls = devolvidas + (perdidas - devolvidas);
    const devolvidasPercentage = (devolvidas / totalCalls) * 100;
    const totalPercentage = ((perdidas - devolvidas) / totalCalls) * 100;

    const data = [
      { x: 'Recebidas', y: devolvidasPercentage },
      { x: 'Total Devolvidas', y: totalPercentage },
    ];

    return data;
  }

  // Chamadas Não Devolvidas
  const chamadasNDevolvidas = () => {
    const totalCalls = nDevolvidas + (perdidas - nDevolvidas);
    const nDevolvidasPercentage = (nDevolvidas / totalCalls) * 100;
    const totalPercentage = ((perdidas - nDevolvidas) / totalCalls) * 100;

    const data = [
      { x: 'Recebidas', y: nDevolvidasPercentage },
      { x: 'Total Não Devolvidas', y: totalPercentage },
    ];

    return data;
  }

  // Chamadas Perdidas
  const chamadasPerdidas = () => {
    const totalCalls = perdidas + (total - perdidas);
    const perdidasPercentage = (perdidas / totalCalls) * 100;
    const totalPercentage = ((total - perdidas) / totalCalls) * 100;

    const data = [
      { x: 'Recebidas', y: perdidasPercentage },
      { x: 'Total', y: totalPercentage },
    ];

    return data;
  }

  // Chamadas Efetuadas
  const chamadasEfetuadas = () => {
    const totalCalls = efetuadas + (total - efetuadas);
    const efetuadasPercentage = (efetuadas / totalCalls) * 100;
    const totalPercentage = ((total - efetuadas) / totalCalls) * 100;

    const data = [
      { x: 'Recebidas', y: efetuadasPercentage },
      { x: 'Total', y: totalPercentage },
    ];

    return data;
  }

  return (
      <Row className='justify-content-around'>
        {show[0] && (
          <Col md={3}>
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
          <Col md={3}>
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
          <Col md={3}>
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
          <Col md={3}>
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
          <Col md={3}>
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
  )
}

export default Charts