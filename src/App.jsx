import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TaskList } from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useTask } from './hooks/useTask'

function App() {
  const {

    tasks,
    tasksCount,
    tasksPending,
    tasksComplete,
    handleNewTask,
    handleDeleteTask,
    handleCompleteTask

  } = useTask()

  return (
      <>
    <h1>Lista de Tareas</h1>
    <div className='counter-tasks'>
      <h3>N° Tareas: {tasksCount}</h3>
      <h3>Pendientes: {tasksPending}</h3>
      <h3>Realizadas: {tasksComplete}</h3>
    </div>
    <div className="add-task">
      
      <TaskForm handleNewTask={handleNewTask}/>
    </div>
      <TaskList 
        tasks={tasks}
        handleDeleteTask ={ handleDeleteTask}
        handleCompleteTask = {handleCompleteTask }
      />
    </>
    )
}

export default App;
