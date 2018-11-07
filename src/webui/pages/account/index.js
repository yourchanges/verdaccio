/**
 * @prettier
 */

import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Label from '../../components/Label';
import Box from '../../components/Box';
import Avatar from '../../components/Avatar';

import { Wrapper, Inner, FormField, Button, Actions } from './styles';

class Account extends Component {
  hanldeChangeAvatar = () => {
    console.log('update avatar');
  };
  render() {
    return (
      <Wrapper>
        <Inner>
          <Box className="marginB20px">
            <Avatar size="md" onClick={this.hanldeChangeAvatar}>
              PO
            </Avatar>
          </Box>
          <Label text="Change Password" weight="bold" className="marginB20px displayBlock" primary />
          <Box className="marginB20px">
            <FormField>
              <InputLabel htmlFor="account--form-currentPassword">Current password</InputLabel>
              <Input id="account--form-currentPassword" />
            </FormField>
            <FormField>
              <InputLabel htmlFor="account--form-newPassword">New password</InputLabel>
              <Input id="account--form-newPassword" />
            </FormField>
            <FormField>
              <InputLabel htmlFor="account--form-repeatNewPassword">Repeat new password</InputLabel>
              <Input id="account--form-repeatNewPassword" />
            </FormField>
          </Box>
          <Actions>
            <Button variant="contained" id="account--form-saveBtn">
              Save
            </Button>
          </Actions>
        </Inner>
      </Wrapper>
    );
  }
}

export default Account;
