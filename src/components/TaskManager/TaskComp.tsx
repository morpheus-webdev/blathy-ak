import { ITask } from '../../util/util';
import { Task } from './Task';

export const TasksComp = (props: { tasks: ITask[] }) => {
	const tasks = props.tasks;
	return (
		<div>
			{tasks.map((t, i) => {
				return <Task task={t} />;
			})}
		</div>
	);
};
