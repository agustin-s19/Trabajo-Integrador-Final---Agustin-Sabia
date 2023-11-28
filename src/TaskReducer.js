export const taskReducer = (initialState,action) => {
    switch(action.type){
        case 'Add Task':
            return [...initialState, action.payload]
        
		
			case 'Delete Task':
        	return initialState.filter(task => task.id !== action.payload);

		   
        
        case 'Complete Task':
            return initialState.map(task => {
				if (task.id === action.payload) {
					return {
						...task,
						done: !task.done,
					};
				}

				return task;
			});

        default:
			return initialState;
    }
}