import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { MdDeveloperBoard } from 'react-icons/md';

import api from '~/services/api';

import { Container, Card, InfoTime } from './styles';

export default function SensorCard({ sensor_id, infoSensor }) {
  const [sensor, setSensor] = useState({ created_at: '' });

  useEffect(() => {
    function checkLastUpdate(date, compareDate) {
      let lastUpdate = differenceInYears(date, compareDate);
      if (lastUpdate === 0) {
        lastUpdate = differenceInDays(date, compareDate);
        if (lastUpdate > 0 && lastUpdate <= 31) {
          return lastUpdate >= 1
            ? `Atualizado há ${lastUpdate} dia`
            : `Atualizado há ${lastUpdate} dias`;
        }
        if (lastUpdate >= 31) {
          lastUpdate = differenceInMonths(date, compareDate);
          return lastUpdate >= 1
            ? `Atualizado há ${lastUpdate} mês`
            : `Atualizado há ${lastUpdate} meses`;
        }
        lastUpdate = differenceInHours(date, compareDate);
        if (lastUpdate < 1) {
          lastUpdate = differenceInMinutes(date, compareDate);

          if (lastUpdate < 1) {
            lastUpdate = differenceInSeconds(date, compareDate);
            return lastUpdate >= 1
              ? `Atualizado há ${lastUpdate} segundo`
              : `Atualizado há ${lastUpdate} segundos`;
          }
          return lastUpdate >= 1
            ? `Atualizado há ${lastUpdate} minuto`
            : `Atualizado há ${lastUpdate} minutos`;
        }
        return lastUpdate >= 1
          ? `Atualizado há ${lastUpdate} hora`
          : `Atualizado há ${lastUpdate} horas`;
      }
      return lastUpdate >= 1
        ? `Atualizado há ${lastUpdate} ano`
        : `Atualizado há ${lastUpdate} anos`;
    }

    const timer = setInterval(() => {
      api
        .get('list-measurement', { params: { sensor: sensor_id } })
        .then(response => {
          if (response.data.measurements.length > 0) {
            const { value, created_at } = response.data.measurements[0];

            const date = new Date();
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const compareDate = utcToZonedTime(created_at, timezone);

            const last_update = checkLastUpdate(date, compareDate);
            setSensor({ value, created_at, last_update });
          }
        });
    }, 3000);

    return () => clearInterval(timer);
  }, [sensor_id]);

  return (
    <Container>
      <Card>
        <MdDeveloperBoard size={48} />
        <div>
          <strong>{infoSensor.name}</strong>
          <span>{infoSensor.type}</span>
        </div>

        <strong>{sensor.value ? sensor.value : '0.00'}</strong>
      </Card>

      <InfoTime>
        {sensor.last_update ? sensor.last_update : 'Não atualizado ainda'}
      </InfoTime>
    </Container>
  );
}

SensorCard.propTypes = {
  sensor_id: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  infoSensor: PropTypes.object.isRequired,
};
