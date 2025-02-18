import { createContext, ReactNode, useState } from 'react';
import { ITask } from '../util/util';

interface IUserContext {
	tasks: ITask[];
	add: (task: ITask) => void; //TODO is name valid
	removeTaskByName: (name: string) => void;
	changeTaskStatus: (name: string) => void;
}

const defaultUserContext: IUserContext = {
	tasks: [],
	add: (task: ITask) => {},
	removeTaskByName: (name: string) => {},
	changeTaskStatus: (name: string) => {},
};

export const UserContext = createContext<IUserContext>(defaultUserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, setTasks] = useState<ITask[]>([]);

	function add(task: ITask) {
		if (tasks.find(({ name }) => name === task.name)) {
			//Létezik
			console.error('tasks already contain object with name: ', task.name);
		} else {
			//nem létezik
			setTasks([...tasks, task]);
		}
	}

	function removeTaskByName(name: string) {
		let copy = tasks.filter((t) => {
			return t.name !== name;
		});
		setTasks(copy);
	}

	function changeTaskStatus(name: string) {
		let copy = tasks.map((t) => {
			if (t.name === name) {
				//ennek kell megváltoztatni
				return { ...t, isCompleted: !t.isCompleted };
			} else {
				return t;
			}
		});
		setTasks(copy);
	}
	return (
		<UserContext.Provider
			value={{ tasks, add, removeTaskByName, changeTaskStatus }}>
			{children}
		</UserContext.Provider>
	);
};
