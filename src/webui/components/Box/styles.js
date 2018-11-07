/**
 * @prettier
 * @flow
 */

import styled from 'react-emotion';
import colors from '../../utils/styles/colors';

// TODO
export const Wrapper = styled.div`
  && {
    border: 1px solid #efeff2;
    background-color: ${colors.white};
    box-shadow: 0 2px 4px 0 hsla(0, 0%, 95%, 0.5);
    padding: 20px;
  }
`;
