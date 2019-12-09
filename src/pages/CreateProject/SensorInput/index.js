import React from 'react';
import { Input } from '@rocketseat/unform';

export default function SensorInput() {
  return (
    <>
      <Input name="name" placeholder="Nome sensor" />
      <Input name="type" placeholder="Tipo de sensor" />
      <Input multiline name="description" placeholder="Descrição sensor" />
    </>
  );
}
