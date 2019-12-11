import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  min-height: 100%;
  background: linear-gradient(-90deg, #dedede, ${lighten(0.3, '#dedede')});
`;
