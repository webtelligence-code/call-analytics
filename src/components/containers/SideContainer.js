import React from 'react';
import { Card } from 'react-bootstrap';
import { Avatar, List } from 'antd';

const SideContainer = ({ extensoes }) => {
  const extensoesArray = extensoes && Object.entries(extensoes).map(([key, value]) => ({ key, ...value }));

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Card className="shadow" style={{ flex: 1 }}>
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
        <Card.Body style={{ overflow: 'auto' }}>
          <List
            itemLayout="horizontal"
            dataSource={extensoesArray}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar style={{ backgroundColor: '#ed6337' }}>{item.key}</Avatar>}
                  title={item.Nome}
                  description={`Perdidas: ${item.perdidas}, Recebidas: ${item.recebidas}, Efetuadas: ${item.efetuadas}`}
                />
              </List.Item>
            )}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default SideContainer;
