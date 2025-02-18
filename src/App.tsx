import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/UserComps/LoginPage';
import RegisterPage from './components/UserComps/RegisterPage';
import LoggedInPage from './components/UserComps/LoggedInPage';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/logged-in' element={<LoggedInPage />} />
			</Routes>
		</>
	);
}

export default App;
