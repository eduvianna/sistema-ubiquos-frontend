import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import { Container, ProjectContainer } from './styles';

export default function Project() {
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('list-projects');

      setProjects(response.data);
    }

    loadProjects();
  }, []);

  return (
    <Container>
      <button type="button">
        <MdAddCircleOutline size={20} />
        <Link to="/create-project">Criar Projeto</Link>
      </button>
      <ProjectContainer>
        <div>
          <select>
            <option>Selecione um projeto</option>
            {projects.map(project => (
              <option key={project.id}>{project.name}</option>
            ))}
          </select>
          <button type="button">Selecionar</button>
        </div>
      </ProjectContainer>
    </Container>
  );
}
