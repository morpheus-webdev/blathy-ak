import { ITask } from '../../util/util';

//Egy darab task tárolására/megjelenítésére alkalmas
export const Task = ({ task }: { task: ITask }) => {
	return (
		<div>
			<h1>{task.name}</h1>
			<p>{task.duration} minutes</p>
			<p>{task.isCompleted ? 'Finished' : 'Unfinished'}</p>
		</div>
	);
};
