import React from 'react';
import { useSelector } from 'react-redux';
import RealTimeChart from './RealTimeChart';

import { Container, Card } from './styles';

export default function Dashboard() {
  const project = useSelector(state => state.user.project);

  return (
    <Container>
      {project &&
        project.sensors &&
        project.sensors.map(
          (element, index) =>
            index < 4 && (
              <Card key={element.id}>
                <h1>{element.name}</h1>
                <RealTimeChart sensor_id={element.id} />
              </Card>
            )
        )}
    </Container>
  );
}
