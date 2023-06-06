import React from 'react';
import { Card } from 'react-bootstrap';
import { Avatar, Badge, List } from 'antd';
import { FaSadTear, FaMeh, FaSmile } from 'react-icons/fa';

const SideContainer = ({ extensoes }) => {
  const extensoesArray = extensoes && Object.entries(extensoes).map(([key, value]) => ({ key, ...value }));

  // Find the item with the worst calls (fewest returned)
  const worstItem = extensoesArray && extensoesArray.reduce((prev, current) => {
    const prevReturned = prev ? prev.recebidas : 0;
    const currentReturned = current.recebidas;
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
    const returned = item.recebidas;
    const lost = item.perdidas;
    const netCalls = returned - lost;

    if (netCalls < 0) {
      // Worst: More lost calls than returned calls
      return <FaSadTear className='ms-2'  />;
    } else if (netCalls === 0) {
      // Neutral: Equal number of lost and returned calls
      return <FaMeh className='ms-2'  />;
    } else {
      // Best: More returned calls than lost calls
      return <FaSmile className='ms-2'  />;
    }
  };

  const getColor = (item) => {
    const returned = item.recebidas;
    const lost = item.perdidas;
    const netCalls = returned - lost;

    if (netCalls < 0) {
      // Worst: More lost calls than returned calls
      return '#c62828';
    } else if (netCalls === 0) {
      // Neutral: Equal number of lost and returned calls
      return 'orange';
    } else {
      // Best: More returned calls than lost calls
      return '#388e3c';
    }
  };

  const getLabel = (item) => {
    const returned = item.recebidas;
    const lost = item.perdidas;
    const netCalls = returned - lost;

    if (netCalls < 0) {
      // Worst: More lost calls than returned calls
      return 'Pior';
    } else if (netCalls === 0) {
      // Neutral: Equal number of lost and returned calls
      return 'Neutro';
    } else {
      // Best: More returned calls than lost calls
      return 'Melhor';
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
        Extensões
      </Card.Header>
      <Card.Body style={{ height: 'calc(100% - 40px)', overflow: 'hidden' }}>
        <div className="marquee-v">
          <List
            itemLayout="horizontal"
            dataSource={extensoesArray}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Badge count={item.total}>
                      <Avatar className='icon' style={{ backgroundColor: getColor(item) }}>{item.key}</Avatar>
                    </Badge>
                  }
                  title={
                    <div>
                      <label>{item.Nome}</label>
                      <Badge className='ms-2 icon' count={getLabel(item)} color={getColor(item)} />
                    </div>
                  }
                  description={`Perdidas: ${item.perdidas}, Recebidas: ${item.recebidas}, Efetuadas: ${item.efetuadas}`}
                  className={item === worstItem ? "worst-item" : ""}
                />
              </List.Item>
            )}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SideContainer;
