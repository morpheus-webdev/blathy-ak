import { Button } from '@mui/material';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Navbar = () => {
	const { isLoggedIn, logout, currentUser } = useContext(UserContext);
	const navigate = useNavigate();
	function logoutUser() {
		logout();
		navigate('/');
	}
	return isLoggedIn ? (
		<div className='navbar'>
			<div className='w-1/2 flex flex-row flex-nowrap justify-start items-center'>
				<img className='w-8 h-8 rounded-3xl mx-2' src={currentUser?.img} />
				<p className=' mx-2'>Hello {currentUser?.username}</p>
			</div>
			<div className='w-1/2 flex flex-row flex-nowrap justify-end items-center  mx-2'>
				<Button onClick={logoutUser}>Log out</Button>
			</div>
		</div>
	) : (
		<div className='navbar'>
			<Button>
				<Link to='/'>Login</Link>
			</Button>
			<Button>
				<Link to='/register'>Register</Link>
			</Button>
		</div>
	);
};

export default Navbar;
