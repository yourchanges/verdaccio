/**
 * @prettier
 * @flow
 */

import React from 'react';
import styled, { css } from 'react-emotion';

import TxtField from '../TxtField';

export const Wrapper = styled.div`
  && {
    width: 100%;
    height: 32px;
    position: relative;
  }
`;

export const InputField = ({ color, ...others }) => (
  <TxtField
    {...others}
    classes={{
      input: css`
        && {
          ${color &&
            css`
              color: ${color};
            `};
        }
      `,
      root: css`
        && {
          &:before {
            content: '';
            border: none;
          }
          &:after {
            ${color &&
              css`
                border-color: ${color};
              `};
          }
          &:hover:before {
            content: none;
          }
        }
      `,
    }}
  />
);
