import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TaskManager from './components/TaskManager/TaskManager';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<div>
			<Navbar />
			<TaskManager />
		</div>
	);
}
export default App;
