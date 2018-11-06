/**
 * @prettier
 */

import styled from 'react-emotion';
import FormControl from '@material-ui/core/FormControl';

import colors from '../../utils/styles/colors';
import { fontWeight } from '../../utils/styles/sizes';

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
  }
`;

export const Label = styled.div`
  && {
    text-align: left;
    color: ${colors.primary};
    font-weight: ${fontWeight.bold};
    font-size: 1.2em;
    margin: 0 0 24px 0;
  }
`;

export const FormField = styled(FormControl)`
  margin: 0 0 10px 0;
  width: 100%;
`;

export const Profile = styled.div`
  && {
  }
`;

export const Password = styled.div`
  && {
    width: 100%;
  }
`;

export const Left = styled.div`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }
`;

export const Right = styled.div`
  && {
    flex: 1;
  }
`;
