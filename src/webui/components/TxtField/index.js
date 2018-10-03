/**
 * @prettier
 * @flow
 */

import React from 'react';
import TextField from '@material-ui/core/TextField';

const TxtField = ({ InputProps, classes, ...other }) => (
  <TextField
    {...other}
    InputProps={{
      ...InputProps,
      classes,
    }}
  />
);

export default TxtField;
