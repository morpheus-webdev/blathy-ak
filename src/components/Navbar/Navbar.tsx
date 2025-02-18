import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				gap: '2.5rem',
				backgroundColor: ' #439ECB',
				height: '10vh',
				padding: '0.5rem',
			}}>
			<Button variant='outlined'>
				<Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
					Tasks
				</Link>
			</Button>
			<Button variant='outlined'>
				<Link style={{ textDecoration: 'none', color: 'white' }} to='/newtask'>
					New task
				</Link>
			</Button>
		</div>
	);
};

export default Navbar;
