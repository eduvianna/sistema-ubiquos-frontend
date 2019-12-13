import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }

    > span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
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
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      color: #000;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    text-align: center;
    margin-left: 35%;
    height: 44px;
    background: #00ab66;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    a {
      color: #fff;
    }

    svg {
      margin-right: 6px;
    }
    &:hover {
      background: ${darken(0.08, '#00ab66')};
    }
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 5px 15px;
  background: #fff;

  form {
    margin-top: 0px;
    select {
      text-align: center;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;
      font-size: 16px;
      width: 84%;

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

export const Scroll = styled(PerfectScrollbar)`
  max-height: 240px;
  padding: 5px 15px;
`;

export const Card = styled.div`
  max-width: 800px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 5px 15px;
  background: ${darken(0.02, '#fff')};

  form {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 10px 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }

    > span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    > button {
      margin: 5px 0 0;
      margin-top: 20px;
      margin-bottom: 10px;
      margin-left: 700px;
      height: 44px;
      background: #3b9eff;
      padding: 10px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    > div:first-of-type {
      display: flex;
      flex-direction: column;
      margin: 0 8px;
      width: 60%;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 37%;
      padding: 15px 5px;

      li {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 15px;

        > div {
          cursor: pointer;
          width: 240px;
          height: 60px;
          border-radius: 6px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          padding: 10px;
          background: #fff;
          transition: transform 0.2s;

          &:hover {
            transform: scale(1.02);
          }
        }

        button {
          margin: 5px 0 0;
          font-weight: bold;
          border: 0;
          border-radius: 4px;
          font-size: 16px;
          transition: background 0.2s;

          background: #fff;
          margin-left: 6px;
          width: 32px;
          height: 32px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);

          &:hover {
            background: ${darken(0.03, '#fff')};
          }

          svg {
            color: #fb6f91;
            transition: color 0.2s;

            &:hover {
              color: ${darken(0.08, '#fb6f91')};
            }
          }
        }
      }
    }
  }
`;

export const InfoSensor = styled.div`
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

  > strong {
    display: block;

    font-size: 28px;

    color: rgba(0, 0, 0, 0.6);
  }
`;
