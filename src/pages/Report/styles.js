import styled from 'styled-components';
import 'react-dates/lib/css/_datepicker.css';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 5px 15px;
  background: #fff;

  form {
    select {
      text-align: center;
      background: rgba(0, 0, 0, 0.1);

      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 5px;
      font-size: 16px;
      width: 23%;

      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      padding: 0 15px;
      transition: background 0.2s;
      margin-left: 15px;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }
`;

export const Card = styled.div`
  max-width: 900px;
  margin: 50px auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 5px 15px;
  background: #fff;
`;
