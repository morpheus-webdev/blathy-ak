import { createContext, ReactNode, useEffect, useState } from 'react';
import { allUsers, ILoggedInUser } from '../utils/userUtils';

//interface
interface IUserContext {
	currentUser: ILoggedInUser | undefined;
	login: (username: string, password: string) => void;
	logout: () => void;
	isLoggedIn: boolean; //TODO maybe változik a context
}
//defaultObj
const defaultUserContext: IUserContext = {
	currentUser: undefined,
	login: (username, password) => {},
	logout: () => {},
	isLoggedIn: false,
};
//Context
export const UserContext = createContext<IUserContext>(defaultUserContext);

//Context Provider
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<ILoggedInUser | undefined>(
		undefined
	);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	useEffect(() => {
		console.log(currentUser);
	}, [currentUser]);
	function login(username: string, password: string) {
		const first = allUsers.find((u) => {
			return u.username === username && u.password === password;
		});
		if (first) {
			setCurrentUser({
				username: first.username,
				img: first.img,
				isPremiumUser: first.isPremiumUser,
			});
			setIsLoggedIn(true);
		}
	}
	function logout() {
		setCurrentUser(undefined);
		setIsLoggedIn(false);
	}
	return (
		<UserContext.Provider value={{ currentUser, login, logout, isLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
};
