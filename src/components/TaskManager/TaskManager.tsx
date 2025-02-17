import { useState } from 'react';
import { ITask } from '../../util/util';
import { TasksComp } from './TaskComp';
import { NewTaskComp } from './NewTaskComp';
import { Route, Routes } from 'react-router-dom';

const TaskManager = () => {
	const [tasks, setTasks] = useState<ITask[]>([]);
	return (
		<Routes>
			<Route path='/' element={<TasksComp tasks={tasks} />} />
			<Route path='/newtask' element={<NewTaskComp />} />
		</Routes>
	);
};

export default TaskManager;
