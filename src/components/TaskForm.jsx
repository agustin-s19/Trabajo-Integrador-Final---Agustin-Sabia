import React from 'react'
import { useForm } from '../hooks/useForm';


export const TaskForm = ({ handleNewTask }) => {
	const { nombre, onInputChange, onResetForm } = useForm({
		nombre: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (nombre.length <= 1) return;

		let newTask = {
			id: new Date().getTime(),
			nombre: nombre,
			done: false,
		};

		handleNewTask(newTask);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='nombre'
				value={nombre}
				onChange={onInputChange}
				placeholder='¿Qué hay que hacer?'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};

export default TaskForm