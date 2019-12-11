import React, { useState, useEffect } from 'react';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from 'react-dates';

import api from '~/services/api';

import { Container } from './styles';

export default function Report() {
  const [projects, setProjects] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [startDay, setStartDay] = useState(new Date());
  const [startFocusDay, setStartFocusDay] = useState(false);

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
        <select>
          <option>Selecione um projeto</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
        <select disabled={disabled}>
          <option>Selecione um sensor</option>
          {projects.map(project => (
            <option key={project.id}>{project.name}</option>
          ))}
        </select>
        <SingleDatePicker
          date={startDay} // momentPropTypes.momentObj or null
          onDateChange={date => setStartDay({ date })} // PropTypes.func.isRequired
          focused={startFocusDay} // PropTypes.bool
          onFocusChange={({ focused }) => setStartFocusDay({ focused })} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
        />
        <input type="date" />
        <button type="button">Selecionar</button>
      </div>
    </Container>
  );
}
