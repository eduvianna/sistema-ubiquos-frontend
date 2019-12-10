/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';

import SensorCard from './SensorCard';

import api from '~/services/api';
import { Container } from './styles';

export default function Dashboard() {
  const [project, setProject] = useState({ projects: [] });
  useEffect(() => {
    async function loadProject() {
      const response = await api.get('list-projects');
      const projects = [];
      response.data.map(
        element => element.sensors.length > 0 && projects.push(element)
      );
      setProject({
        projects,
        index: Math.floor(Math.random() * projects.length),
      });
    }
    loadProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setProject]);
  return (
    <Container>
      {project.projects &&
        project.projects.map((element, index) => {
          if (index === project.index) {
            for (let i = 0; i < 4; i += 1) {
              if (i < element.sensors.length) {
                return (
                  <SensorCard
                    key={element.sensors[i].id}
                    infoSensor={element.sensors[i]}
                    sensor_id={element.sensors[i].id}
                  />
                );
              }
            }

            return element.sensors;
          }
        })}
    </Container>
  );
}
