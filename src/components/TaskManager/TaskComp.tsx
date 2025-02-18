import { useContext } from 'react';
import { ITask } from '../../util/util';
import { Task } from './Task';
import { UserContext } from '../../contexts/TaskContext';

export const TasksComp = () => {
	const { tasks } = useContext(UserContext);
	return (
		<div style={{ display: 'flex', flexDirection: 'row', flex: 'wrap' }}>
			{tasks.map((t, i) => {
				return <Task key={`task-${i}`} task={t} />;
			})}
		</div>
	);
};
