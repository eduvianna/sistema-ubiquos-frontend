import React, { useState, useEffect } from 'react';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

import api from '~/services/api';

import { Container } from './styles';

export default function Report() {
  const [projects, setProjects] = useState([]);
  const [sensors, setSensors] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const [focusInput, setFocusInput] = useState(null);

  function getSensors(projectID) {
    console.log(projectID);
    const project = projects.find(element => element.id === projectID);

    if (project.sensors.length > 0) {
      setSensors(project.sensors);
      return setDisabled(!disabled);
    }

    setSensors([]);
    return setDisabled(!disabled);
  }
  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('list-projects');

      setProjects(response.data);
    }

    loadProjects();
  }, []);

  return (
    <Container>
      <div>
        <select
          onChange={option =>
            option.target.value && getSensors(option.target.value)
          }
        >
          <option>Selecione um projeto</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
        <select disabled={disabled}>
          <option>Selecione um sensor</option>
          {sensors.map(sensor => (
            <option key={sensor.id}>{sensor.name}</option>
          ))}
        </select>

        <DateRangePicker
          startDate={startDay}
          startDateId="start_date"
          startDatePlaceholderText="Data Inicio"
          minimumNights={0}
          endDate={endDay}
          endDateId="end_date"
          endDatePlaceholderText="Data Final"
          onDatesChange={({ startDate, endDate }) => {
            setStartDay(startDate);
            setEndDay(endDate);
          }}
          focusedInput={focusInput}
          onFocusChange={focusedInput => setFocusInput(focusedInput)}
          displayFormat="DD/MM/YYYY"
        />
        <button type="button">Selecionar</button>
      </div>
    </Container>
  );
}
