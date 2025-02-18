import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { defaultTask, ITask } from '../../util/util';
import { UserContext } from '../../contexts/TaskContext';

export const NewTaskComp = () => {
	const { add } = useContext(UserContext);
	const [newTask, setNewTask] = useState<ITask>(defaultTask);

	function handleAdd() {
		if (newTask.name !== '' && newTask.duration !== 0) {
			add(newTask);
		}
	}
	return (
		<div>
			<TextField
				type='text'
				placeholder='Task name...'
				onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
			/>
			<TextField
				type='number'
				placeholder='Duration in minutes'
				onChange={(e) =>
					setNewTask({ ...newTask, duration: parseInt(e.target.value) })
				}
			/>
			<Button onClick={handleAdd}>Add task</Button>
		</div>
	);
};
