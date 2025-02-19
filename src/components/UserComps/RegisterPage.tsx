import { Button, TextField } from '@mui/material';
import {
	allUsers,
	defaultRegisteredUser,
	IRegisteredUser,
} from '../../utils/userUtils';
import { useState } from 'react';

const RegisterPage = () => {
	const [newUser, setNewUser] = useState<
		{ passwordAgain: string } & IRegisteredUser
	>({ ...defaultRegisteredUser, passwordAgain: '' });

	function handleRegister() {
		if (
			newUser.username.length > 8 &&
			newUser.password.length > 12 &&
			newUser.password === newUser.passwordAgain &&
			!allUsers.find((u) => {
				return u.username === newUser.username;
			})
		) {
			console.log('succesful');
			console.log(newUser);
			//allUsers.push(newUser)
		}
	}

	return (
		<div>
			<TextField
				type='text'
				placeholder='Username...'
				onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
			/>
			<TextField
				type='password'
				placeholder='Password...'
				onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
			/>
			<TextField
				type='password'
				placeholder='Password again...'
				onChange={(e) =>
					setNewUser({ ...newUser, passwordAgain: e.target.value })
				}
			/>
			<TextField
				type='text'
				placeholder='Profile image...'
				onChange={(e) => setNewUser({ ...newUser, img: e.target.value })}
			/>
			<Button onClick={handleRegister}>Register</Button>
		</div>
	);
};

export default RegisterPage;
