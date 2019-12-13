/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  Container,
  ProjectContainer,
  Card,
  Scroll,
  InfoSensor,
} from './styles';

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [selectedSensors, setSelectedSensors] = useState([]);
  const [valueName, setValueName] = useState(null);
  const [valueDescription, setValueDescription] = useState(null);
  const [valueHost, setValueHost] = useState(null);
  const [show, setShow] = useState(false);

  function handleSubmit({ project }) {
    setShow(false);
    setValueName(null);
    setValueDescription(null);
    setValueHost(null);
    setSelectedSensors([]);
    if (!project) {
      return toast.error('Selecione um projeto');
    }
    setSelectedProject(
      projects.find(element => Number(element.id) === Number(project))
    );
    setSelectedSensors(
      projects.find(element => Number(element.id) === Number(project)).sensors
    );
    setShow(true);
  }

  async function handleUpdateProject({ name, description, host }) {
    await api
      .put('update-project', {
        project_id: selectedProject.id,
        name,
        description,
        host,
      })
      .then(response => {
        setShow(false);
        return toast.success('Projeto alterado com sucesso');
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
  }, [show]);

  return (
    <>
      <Container>
        <button type="button">
          <MdAddCircleOutline size={20} />
          <Link to="/create-project">Criar Projeto</Link>
        </button>
        <ProjectContainer>
          <Form onSubmit={handleSubmit}>
            <div>
              <Select name="project" options={projects} />
              <button type="submit">Selecionar</button>
            </div>
          </Form>
        </ProjectContainer>
      </Container>
      {show && (
        <Card>
          <Form onSubmit={handleUpdateProject}>
            <div>
              <Input
                name="name"
                placeholder="Nome do projeto"
                value={valueName || selectedProject.name}
                onChange={e => setValueName(e.target.value)}
              />
              <Input
                name="host"
                placeholder="Host projeto"
                value={valueHost || selectedProject.host}
                onChange={e => setValueHost(e.target.value)}
              />
              <Input
                name="description"
                value={valueDescription || selectedProject.name}
                onChange={e => setValueDescription(e.target.value)}
                multiline
                placeholder="Descrição projeto"
              />
            </div>
            <ul>
              {selectedSensors.length > 0 ? (
                <Scroll>
                  {selectedSensors.map(element => (
                    <li key={element.id}>
                      <div>
                        <InfoSensor>
                          <div>
                            <strong>{element.name}</strong>
                            <span>{element.type}</span>
                          </div>

                          <strong> ID {element.id}</strong>
                        </InfoSensor>
                      </div>
                      <button type="button">
                        <MdDelete size={24} />
                      </button>
                    </li>
                  ))}
                </Scroll>
              ) : (
                <strong>Sem sensores cadastrados</strong>
              )}
            </ul>

            <button type="submit">Salvar</button>
          </Form>
        </Card>
      )}
    </>
  );
}
