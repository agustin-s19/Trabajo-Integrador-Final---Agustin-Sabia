import { useEffect, useReducer } from "react";
import { taskReducer } from "../TaskReducer";

export const useTask = () =>{
    const initialState = []

    console.log('Estado inicial de tasks:', initialState);



    const init = () => {
        return JSON.parse(localStorage.getItem("tasks")) || []
    }

    const [tasks,dispatch] = useReducer(taskReducer,initialState,init);


    const tasksCount = tasks.length
    
    const tasksPending = tasks.filter(task => !task.done).length
    
    const tasksComplete = tasks.filter(task => task.done).length
    
    useEffect(()=>{
        console.log('Estado actual de tasks:', tasks);
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks]
        )

    const handleNewTask = task =>{
        console.log('Nueva tarea:', task)
        const action = {
            type: "Add Task",
            payload: task
           
        }
        
        dispatch(action)
        console.log('Estado actual de tasks después de agregar:', tasks); 

    }
    const handleDeleteTask = id => {
        const action = {
            type: "Delete Task",
            payload: id
        }
        dispatch(action)
    }
    const handleCompleteTask = id =>{
        const action={
            type: "Complete Task",
            payload: id
        }
        dispatch(action)
    }
    return{
        tasks,
        tasksCount,
        tasksPending,
        tasksComplete,
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask
    }
}
