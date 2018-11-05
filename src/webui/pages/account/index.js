import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

import Box from '../../components/Box';

import { Wrapper } from './styles';

class Account extends Component {
  render() {
    return (
        <Wrapper>
            <Box>
              <FormControl fullWidth>
                <InputLabel htmlFor="currentPassword">Current password</InputLabel>
                <Input id="login--form-password" />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor="newPassword">New password</InputLabel>
                <Input id="login--form-newPassword" />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor="repeatNewPassword">Repeat new password</InputLabel>
                <Input id="login--form-repeatNewPassword" />
              </FormControl>
            </Box>
        </Wrapper>
    );
  }
}

export default Account;
