import React from "react";
import TaskItem from "./TaskItem";

export const TaskList = ({
	tasks,
	handleDeleteTask,
	handleCompleteTask,
}) => {
	return (
		<ul>
			{tasks.map(task => (
				<TaskItem
					key={task.id}
					task={task}
					handleDeleteTask={handleDeleteTask}
					handleCompleteTask={handleCompleteTask}
				/>
			))}
		</ul>
	);
};