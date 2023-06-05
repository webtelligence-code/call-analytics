import React from 'react';
import { Card } from 'react-bootstrap';
import { Avatar, List } from 'antd';

const SideContainer = ({ extensoes }) => {
  const extensoesArray = extensoes && Object.entries(extensoes).map(([key, value]) => ({ key, ...value }));

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
                  avatar={<Avatar className='icon' style={{ backgroundColor: '#ed6337' }}>{item.key}</Avatar>}
                  title={item.Nome}
                  description={`Perdidas: ${item.perdidas}, Recebidas: ${item.recebidas}, Efetuadas: ${item.efetuadas}`}
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
