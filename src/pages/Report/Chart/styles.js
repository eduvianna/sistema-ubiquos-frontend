import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Card = styled.div`
  width: 260px;
  height: 96px;
  margin: 30px 10px;
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 20px 15px;
  background: #fff;
`;

export const InfoCard = styled.div`
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
