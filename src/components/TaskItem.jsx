import React from 'react'
import { FaTrash} from 'react-icons/fa'


export const TaskItem = ({
  task,
  handleDeleteTask,
  handleCompleteTask
 
}) => {
  return (
		<li>
			
			
			<span onClick={() => handleCompleteTask(task.id)}>
				<label
					className={`container-done ${task.done ? 'active' : ''}`}
				></label>
			</span>	
			<div className={`task-done ${task.done ? 'active' : ''}`}>
				{task.nombre}
			</div>
			<button
				className='btn-delete'
				onClick={() => handleDeleteTask(task.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
}

export default TaskItem