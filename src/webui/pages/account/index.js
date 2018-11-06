/**
 * @prettier
 */

import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Avatar from '@material-ui/core/Avatar';
import Box from '../../components/Box';

import { Wrapper, Password, Inner, Label, FormField, Left, Right } from './styles';

class Account extends Component {
  handleUpdateAvatar = () => {
    console.log('update');
  };
  render() {
    return (
      <Wrapper>
        <Inner>
          <Box>
            <Left>
              <Avatar src="https://material-ui.com/static/images/uxceo-128.jpg" />
            </Left>
            <Right>
              <FormField>
                <InputLabel htmlFor="currentPassword">Name</InputLabel>
                <Input id="login--form-password" />
              </FormField>
            </Right>
          </Box>
          <Label>Change Password</Label>
          <Box>
            <Password>
              <FormField>
                <InputLabel htmlFor="currentPassword">Current password</InputLabel>
                <Input id="login--form-password" />
              </FormField>
              <FormField>
                <InputLabel htmlFor="newPassword">New password</InputLabel>
                <Input id="login--form-newPassword" />
              </FormField>
              <FormField>
                <InputLabel htmlFor="repeatNewPassword">Repeat new password</InputLabel>
                <Input id="login--form-repeatNewPassword" />
              </FormField>
            </Password>
          </Box>
        </Inner>
      </Wrapper>
    );
  }
}

export default Account;
