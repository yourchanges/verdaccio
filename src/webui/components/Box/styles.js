/**
 * @prettier
 * @flow
 */

import styled from 'react-emotion';

export const Wrapper = styled.div`
  && {
    border: 1px solid #efeff2;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 hsla(0, 0%, 95%, 0.5);
    padding: 40px;
    width: 780px;
    &:before,
    &:after {
      content: ' ';
      display: table;
    }
  }
`;
