import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1260px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const Card = styled.div`
  width: 600px;
  margin: 15px;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 5px 15px;
  background: #fff;
`;
