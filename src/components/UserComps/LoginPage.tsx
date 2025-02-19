import { Button, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const { login, isLoggedIn } = useContext(UserContext);
	const navigate = useNavigate();
	const [loginUser, setLoginUser] = useState<{
		username: string;
		password: string;
	}>({ username: '', password: '' });

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/home');
		}
	}, [isLoggedIn]);

	function handleLogin() {
		if (loginUser.username.length >= 8 && loginUser.password.length >= 8) {
			login(loginUser.username, loginUser.password);
		}
	}
	return (
		<div className='flex flex-col flex-nowrap justify-evenly items-center gap-4 my-4'>
			<TextField
				type='text'
				placeholder='Username...'
				onChange={(e) => {
					setLoginUser({ ...loginUser, username: e.target.value });
				}}
			/>
			<TextField
				type='password'
				placeholder='Password...'
				onChange={(e) => {
					setLoginUser({ ...loginUser, password: e.target.value });
				}}
			/>
			<Button onClick={handleLogin} variant='contained'>
				Login
			</Button>
		</div>
	);
};

export default LoginPage;
