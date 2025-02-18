import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
	let isLoggedIn = false;
	return isLoggedIn ? (
		<div>
			<Button>Log out</Button>
		</div>
	) : (
		<div>
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
