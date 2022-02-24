import { useState, useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function TaskApp() {
    const [tasks, setTasks] = useState(initialTasks);
    const[task, dispatch] = useReducer(taskReducer, initialTasks)
  
    function handleAddTask(text) {
      dispatch({
        type: 'added',
        id: nextId++,
        text: text,
      });
    }
  
    function handleChangeTask(task) {
      dispatch({
        type: 'changed',
        task: task
      });
    }
  
    function handleDeleteTask(taskId) {
      dispatch({
        type: 'deleted',
        id: taskId
      });
    }
  
    return (
      <>
        <h1>Prague itinerary</h1>
        <div>
            <ul>
                {initialTasks.map((task) => <li>{task.id}, {task.text}, {task.done}</li>)}
            </ul>
        </div>
        <AddTask
          onAddTask={handleAddTask}
        />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </>
    );
  }
  
  
  // Write code below
function taskReducer(task, action) {
    // return next state for React to set
    switch(action.type){
        case 'added': 
        return [...initialTasks, task];
        case 'changed': 
        return [...initialTasks, task];
        case 'deleted': 
        return [...initialTasks].filter(id => task.id !== id);
    default:
        return task
  }
}