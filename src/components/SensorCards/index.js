/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SensorCard from './SensorCard';

import { Container } from './styles';
import {
  selectProjectRequest,
  clearProject,
} from '~/store/modules/user/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  let project = useSelector(state => state.user.project);

  useEffect(() => {
    if (project === null) {
      dispatch(selectProjectRequest());
    }
    return () => {
      dispatch(clearProject());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  project = useSelector(state => state.user.project);

  return (
    <Container>
      {project &&
        project.sensors &&
        project.sensors.map(
          (element, index) =>
            index < 4 && (
              <SensorCard
                key={element.id}
                infoSensor={element}
                sensor_id={element.id}
              />
            )
        )}
    </Container>
  );
}
