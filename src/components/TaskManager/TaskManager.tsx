import { useEffect, useState } from 'react';
import { ITask } from '../../util/util';
import { TasksComp } from './TaskComp';
import { NewTaskComp } from './NewTaskComp';
import { Route, Routes } from 'react-router-dom';

const TaskManager = () => {
	return (
		<Routes>
			<Route path='/' element={<TasksComp />} />
			<Route path='/newtask' element={<NewTaskComp />} />
		</Routes>
	);
};

export default TaskManager;
