import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import SensorCards from '~/components/SensorCards';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <SensorCards />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
