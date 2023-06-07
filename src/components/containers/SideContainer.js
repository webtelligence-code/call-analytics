import React from 'react';
import { Card } from 'react-bootstrap';
import { Avatar, Badge, List } from 'antd';
import { FaSadTear, FaMeh, FaSmile } from 'react-icons/fa';
import { FcCallback, FcMissedCall, FcPhone } from 'react-icons/fc'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import ListItemDescription from '../utility/ListItemDescription';

const SideContainer = ({ extensoes }) => {
  const extensoesArray = extensoes && Object.entries(extensoes).map(([key, value]) => ({ key, ...value }));

  // Find the item with the worst calls (fewest returned)
  const worstItem = extensoesArray && extensoesArray.reduce((prev, current) => {
    const prevReturned = prev ? prev.Devolvidas : 0;
    const currentReturned = current.Devolvidas;
    const prevLost = prev ? prev.perdidas : 0;
    const currentLost = current.perdidas;

    const prevNetCalls = prevReturned - prevLost;
    const currentNetCalls = currentReturned - currentLost;

    if (!prev || currentNetCalls < prevNetCalls) {
      return current;
    }
    return prev;
  }, null)

  const getIcon = (item) => {
    const returned = item.Devolvidas;
    const lost = item.perdidas;
    const netCalls = returned - lost;

    if (netCalls < 0) {
      // Worst: More lost calls than returned calls
      return <FaSadTear className='ms-2' />;
    } else if (netCalls === 0) {
      // Neutral: Equal number of lost and returned calls
      return <FaMeh className='ms-2' />;
    } else {
      // Best: More returned calls than lost calls
      return <FaSmile className='ms-2' />;
    }
  };

  const getColor = (item) => {
    const returned = item.Devolvidas;
    const lost = item.perdidas;
    const netCalls = returned - lost;

    const returnRate = (returned / lost) * 100;
    if (returnRate < 50) {
      return '#c62828';
    } else if (returnRate === 50) {
      return 'orange';
    } else {
      return '#388e3c'
    }
  };

  const getLabel = (item) => {
    const returned = item.Devolvidas;
    const lost = item.perdidas;
    const netCalls = returned - lost;

    const returnRate = (returned / lost) * 100;
    console.log(returnRate)
    if (returnRate < 50) {
      return 'Pior';
    } else if (returnRate === 50) {
      return 'Neutro';
    } else {
      return 'Melhor'
    }
  };

  return (
    <Card className="shadow h-100">
      <Card.Header
        className="text-center shadow-sm"
        style={{
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          alignItems: 'center',
          backgroundColor: 'white',
        }}
        as="h5"
      >
        Piores Concessões (teste)
      </Card.Header>
      <Card.Body style={{ overflow: 'hidden' }}>
        <List
          itemLayout="horizontal"
          dataSource={extensoesArray}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar style={{ backgroundColor: '#a3a2a2' }}>{item.key}</Avatar>}
                title={item.Nome}
                description={
                  <ListItemDescription
                    total={item.total}
                    recebidas={item.recebidas}
                    perdidas={item.perdidas}
                    devolvidas={item.Devolvidas}
                    nDevolvidas={item.NDevolvidas}
                    efetuadas={item.efetuadas} />
                }
                className={item === worstItem ? "worst-item" : ""}
              />
            </List.Item>
          )}
        />
      </Card.Body>
    </Card>
  );
};

export default SideContainer;