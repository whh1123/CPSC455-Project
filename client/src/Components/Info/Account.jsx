import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

// import { updateUserProfile } from '../actions/userAction';

import {
  ButtonPrimary,
  ButtonOutlineSecondary,
  TableSMStripedBordered,
  Row,
  Col,
} from '../styles/bootstrap.style';

import Meta from '../components/atoms/Meta';

import Prefetch from '../components/molecules/Prefetch';
import FormInput from '../components/atoms/FormInput';
import Message from '../components/atoms/MessageComponent';
import { Box, Typography, makeStyles, Table, TableBody, TableRow, TableCell } from '@material-ui/core';

// const useStyle = makeStyles({
//     RowWrapper: {
//         '@media (max-width: 576px) {
//             flexDirection: column
//         }
//     },

// });

const RowWrapper = styled(Row)`
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Column = styled(Col)`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  max-width: ${({ maxWidth }) => maxWidth};
  @media (max-width: 576px) {
    & + & {
      margin-top: 2rem;
      overflow: auto;
    }
    max-width: 100%;
    flex-direction: column;
  }
`;

const Account = () => {
//   history,
//   loading,
//   error,
//   userInfo,
//   loggedId,
//   updateUserProfile,
//   orderList,
//   getOrderList,
//   clearOrderList,
//   userUpdateProfile,

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState({});

  // Using it to call when the component unmounts
  useEffect(() => {
    return () => {
      clearOrderList();
    };
  }, [clearOrderList]);

  useEffect(() => {
    if (!loggedId) history.push('/login');
    else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }

    if (!orderList.loading && !orderList.orders) getOrderList();
  }, [history, userInfo, loggedId, getOrderList, orderList]);

  function submitHandler(e) {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setMessage({
        name: name.length === 0,
        email: email.length === 0,
        password: password.length === 0,
        confirmPassword: confirmPassword.length === 0,
      });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({
        ...message,
        password: true,
        confirmPassword: true,
      });
      return;
    }

    updateUserProfile({
      _id: userInfo._id,
      name,
      email,
      password,
    });
  }


  return (
    <RowWrapper>
      <Meta title="Profile" />
      <Column flex="0 0 25%" maxWidth="25%">
        <h2>Profile</h2>
        {userUpdateProfile.success && (
          <Message variant="success">Profile updated</Message>
        )}

        <Prefetch error={error} loading={loading} />

        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <FormInput
            name="name"
            type="text"
            value={name}
            onChange={setName}
            autocomplete="name"
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            isInvalid={!!message['email']}
            onChange={setEmail}
            autocomplete="email"
          />
          <FormInput
            name="password"
            disabled={loading}
            isInvalid={!!message['password']}
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            autocomplete="password"
          />
          <FormInput
            name="confirmPassword"
            disabled={loading}
            isInvalid={!!message['confirmPassword']}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            autocomplete="password"
          />
          <ButtonPrimary type="submit" variant="primary" block>
            Update
          </ButtonPrimary>
        </form>
      </Column>
    </RowWrapper>
  );
}

const mapStateToProps = (state) => ({
  loggedId: state.userLogin.userInfo?._id,
  userInfo: state.userLogin.userInfo,
  userUpdateProfile: state.userUpdateProfile
});

const mapDispatchToProps = {
  updateUserProfile
};

export default Account;