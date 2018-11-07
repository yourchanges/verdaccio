/**
 * @prettier
 * @flow
 */

import styled from 'react-emotion';
import { default as Avt } from '@material-ui/core/Avatar';
import colors from '../../utils/styles/colors';

import { IProps } from './types';

const Avatar = styled(Avt)`
  background-color: ${colors.primary};
  &:hover {
    cursor: pointer;
  }
  ${({ size = 'sm', border = true }: IProps) => {
    let style = {};
    if (border) {
      style = { ...style, border: `4px solid ${colors.primary}` };
    }
    switch (size) {
      case 'md':
        style = { ...style, width: '80px', height: '80px' };
        break;
      case 'lg':
        style = { ...style, width: '160px', height: '160px' };
        break;
      default:
        style = { ...style, width: '30px', height: '30px' };
    }
    return style;
  }};
`;

export default Avatar;
