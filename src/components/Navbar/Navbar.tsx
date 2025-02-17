import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<button>
				<Link to='/'>Tasks</Link>
			</button>
			<button>
				<Link to='/newtask'>New task</Link>
			</button>
		</div>
	);
};

export default Navbar;
