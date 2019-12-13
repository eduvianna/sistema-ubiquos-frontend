import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  height: 96px;
  margin: 30px 20px;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 20px 15px;
  background: #fff;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    text-align: left;
    margin-right: 15px;

    strong {
      display: block;
      color: rgba(0, 0, 0, 0.7);
      font-size: 14px;
    }

    span {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  svg {
    color: rgba(0, 0, 0, 0.7);
  }

  > strong {
    display: block;
    font-size: 28px;
    color: #00ab66;
  }
`;

export const InfoTime = styled.span`
  display: block;
  text-align: right;
  margin-top: 8px;
  font-size: 12px;
  color: #999;
`;
