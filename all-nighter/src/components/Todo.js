import React, {useState} from "react";

function Todo(){
    const [tasks, setTasks] = useState([]) //empty array
    const [newTask, setNewTask] = useState(''); //storing the value of the new task

        // Function to delete a task
            const deleteTask = (taskId) => {
            setTasks(tasks.filter(task => task.id !== taskId));
};
        // Function to toggle task completion
        const toggleTask = (taskId) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
            return { ...task, completed: !task.completed };
            }
            return task;
        }));
        };
        
    // Function to add a new task
    const addTask = () => {
        //if else function, user can only add 3 tasks
            if (tasks.length >= 3) {
                alert("Maximum 3 tasks allowed! Complete one to add more.");
                return; // Stop here if limit reached
            }




        // Step 1: Check if input is empty
        if (newTask === '') {
            alert("Please type a task first!");
            return;
        }

        // Step 2: Create a new task object
        const newTaskObj = {
            id: Date.now(), // Creates a unique number ID
            text: newTask,   // The text from the input
            completed: false // Task starts as not done
        };

        // Step 3: Add the new task to our tasks array
        setTasks([...tasks, newTaskObj]);
        
        // Step 4: Clear the input field
        setNewTask('');
        };



    return(
        <div className="todo-widget">
            <h3>your list for this all-nighter ✅</h3>
            <div className="task-input">
                <input
                    type="text"
                    value={newTask}
                    onChange = {(e) => setNewTask(e.target.value)}
                    placeholder="Add a task"
                />
                <button onClick={addTask}>Create a new task</button>
                    
            </div>
            <div className="tasks">
                {/* to actually show the tasks */}
                {tasks.map(task => (
                    <div key={task.id} className="task">
                    <input 
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                    />
                    <span className={task.completed ? 'completed' : ''}>
                        {task.text}
                    </span>

             {/* to delete */}
                      <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
  ))}

            </div>


        </div>
    )
}

export default Todo;