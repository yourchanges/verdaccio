/**
 * @prettier
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import { Wrapper } from './styles';
import { IProps } from './types';

const Box = ({ children }: IProps): Node => <Wrapper>{children}</Wrapper>;

export default Box;
