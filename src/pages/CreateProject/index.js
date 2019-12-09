/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Input, Scope } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import SensorInput from './SensorInput';

import { Container } from './styles';

const schema = Yup.object().shape({
  host: Yup.string().required('Host é obrigatório'),
  name: Yup.string().required('Nome é obrigatório'),
  description: Yup.string().required('A Descrição é obrigatória'),
});

export default function CreateProject() {
  const [sensors, setSensors] = useState([]);

  async function handleSubmit(data) {
    const { host, name, description, sensor } = data;
    await api
      .post('create-project', {
        host,
        name,
        description,
      })
      .then(response => {
        if (sensor) {
          let countError = 0;
          sensor.forEach(async element => {
            await api
              .post('create-sensor', {
                project_id: response.data.id,
                name: element.name,
                description: element.description,
                type: element.type,
              })
              // eslint-disable-next-line no-loop-func
              .catch(() => {
                countError += 1;
                return toast.error(
                  `Erro ao cadastrar o sensor: ${element.name}`
                );
              });
          });

          if (countError === 0) {
            toast.success('Projeto criado com sucesso');
          }
        }
      })
      .catch(() => {
        return toast.error('Erro ao criar o projeto, verifique os dados');
      });

    return history.push('/project');
  }

  function handleDeleteSensor(e, index) {
    // e.currentTarget.parentNode.remove();
    sensors.splice(index, 1);
    setSensors([...sensors]);
  }

  function handleCreateSensor() {
    setSensors([...sensors, <SensorInput />]);
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome do projeto" />
        <Input name="host" placeholder="Host projeto" />
        <Input name="description" multiline placeholder="Descrição projeto" />

        <hr />

        {sensors.map((element, index) => (
          <div key={index}>
            <Scope path={`sensor[${index}]`}>
              {element}
              <MdDelete size={32} onClick={e => handleDeleteSensor(e, index)} />
            </Scope>
          </div>
        ))}
        <button type="button" onClick={handleCreateSensor}>
          Adicionar Sensor
        </button>

        <button type="submit">Criar</button>
      </Form>

      <button type="button">
        <Link to="/project">Voltar</Link>
      </button>
    </Container>
  );
}
