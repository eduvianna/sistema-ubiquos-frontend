/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Form, Select, Scope } from '@rocketseat/unform';
import moment from 'moment';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

import Chart from './Chart';
import api from '~/services/api';

import { Container, Card } from './styles';

export default function Report() {
  const [projects, setProjects] = useState([]);
  const [sensors, setSensors] = useState([]);
  const [report, setReport] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [startDay, setStartDay] = useState(moment(new Date()));
  const [endDay, setEndDay] = useState(moment(new Date()));
  const [focusInput, setFocusInput] = useState(null);

  function handleSubmit({ project, sensor }) {
    setReport(null);
    if (!project && !sensor) {
      toast.error('Escolha de projeto necessário ');

      return toast.error('Escolha de sensor necessário ');
    }
    if (!sensor) {
      return toast.error('Escolha de sensor necessário ');
    }

    if (!project) {
      return toast.error('Escolha de projeto necessário ');
    }
    setReport(
      <Card>
        <Chart sensor_id={sensor} startDay={startDay} endDay={endDay} />
      </Card>
    );
  }
  function getSensors(projectID) {
    setSensors([]);
    projects.map(element => {
      if (Number(element.id) === Number(projectID)) {
        if (element.sensors.length > 0) {
          element.sensors.map(el => {
            el.title = el.name;
          });
          setSensors(element.sensors);
          setDisabled(false);
        } else {
          toast.error('Este projeto não possui nenhum sensor cadastrado');
          setDisabled(true);
        }
      }
    });
  }
  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('list-projects');
      response.data.map(element => {
        element.title = element.name;
      });
      setProjects(response.data);
    }

    loadProjects();
  }, []);

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Select
            name="project"
            options={projects}
            onChange={option =>
              option.target.value && getSensors(option.target.value)
            }
          />
          <Select name="sensor" disabled={disabled} options={sensors} />
          <Scope path="date">
            <DateRangePicker
              isOutsideRange={() => false}
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
          </Scope>

          <button type="submit">Gerar Relatório</button>
        </Form>
      </Container>
      {report}
    </>
  );
}
