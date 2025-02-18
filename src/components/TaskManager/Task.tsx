import { Button, Checkbox } from '@mui/material';
import { ITask } from '../../util/util';
import { useContext } from 'react';
import { UserContext } from '../../contexts/TaskContext';

//Egy darab task tárolására/megjelenítésére alkalmas
export const Task = ({ task }: { task: ITask }) => {
	const { removeTaskByName, changeTaskStatus } = useContext(UserContext);
	return (
		<div
			style={{
				width: '20%',
				height: '20%',
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'nowrap',
				alignItems: 'center',
				backgroundColor: '#fff7e1',
				borderRadius: '8%',
				margin: '1rem',
			}}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'end',
				}}>
				<Button variant='outlined' onClick={() => removeTaskByName(task.name)}>
					DEL
				</Button>
			</div>
			<h3>{task.name}</h3>
			<p>{task.duration} minutes</p>
			<Checkbox
				value={task.isCompleted}
				onChange={() => changeTaskStatus(task.name)}
			/>
		</div>
	);
};
