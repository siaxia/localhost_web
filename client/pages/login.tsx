import React from 'react';
import Layout from '../components/main/Layout';
import Login from '../components/user/Login';
import styled from 'styled-components';
import { LoginProps } from '../interfaces';

interface Props {}

const LoginContainer = styled.div`
	& > * {
		margin: 0 auto;
	}
`;

const login = (props: Props) => {
	return (
		<Layout title='로그인 | localhost'>
			<LoginContainer>
				<Login />
			</LoginContainer>
		</Layout>
	);
};

export default login;
