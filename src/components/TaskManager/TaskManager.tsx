import { useEffect, useState } from 'react';
import { ITask } from '../../util/util';
import { TasksComp } from './TaskComp';
import { NewTaskComp } from './NewTaskComp';
import { Route, Routes } from 'react-router-dom';

const TaskManager = () => {
	const [tasks, setTasks] = useState<ITask[]>([]);
	function handleAdd(task: ITask) {
		setTasks([...tasks, task]);
	}
	useEffect(() => {
		console.log(tasks);
	}, [tasks]);

	return (
		<Routes>
			<Route path='/' element={<TasksComp tasks={tasks} />} />
			<Route path='/newtask' element={<NewTaskComp add={handleAdd} />} />
		</Routes>
	);
};

export default TaskManager;
