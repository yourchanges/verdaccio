/**
 * @prettier
 */

import styled from 'react-emotion';
import FormControl from '@material-ui/core/FormControl';
import { default as Btn } from '@material-ui/core/Button';
import colors from '../../utils/styles/colors';

export const Wrapper = styled.div`
  && {
    background-color: #f8f8f8;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Inner = styled.div`
  && {
    width: 780px;
    margin: 20px 0;
  }
`;

export const FormField = styled(FormControl)`
  margin: 0 0 10px 0;
  width: 100%;
`;

export const Actions = styled.div`
  && {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Button = styled(Btn)`
  && {
    background-color: ${colors.primary};
    color: ${colors.white};
    &:hover {
      background-color: #45573b;
    }
  }
`;
