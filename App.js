import React, { useState, useEffect } from 'react';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [totalTime, setTotalTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timeInterval, setTimeInterval] = useState(null);

    const addTask = () => {
        if (taskInput) {
            setTasks([...tasks, { id: Date.now(), name: taskInput, time: 0 }]);
            setTaskInput('');
        }
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const startTimer = (taskId) => {
        if (!timeInterval) {
            setIsRunning(true);
            const interval = setInterval(() => {
                setTasks(prevTasks => 
                    prevTasks.map(task => 
                        task.id === taskId ? {...task, time: task.time + 1} : task
                    )
                );
                setTotalTime(prevTotal => prevTotal + 1);
            }, 1000);
            setTimeInterval(interval);
        }
    };

    const stopTimer = () => {
        setIsRunning(false);
        clearInterval(timeInterval);
        setTimeInterval(null);
    };

    useEffect(() => {
        return () => { // Cleanup on component unmount
            clearInterval(timeInterval);
        };
    }, [timeInterval]);

    return (
        <div>
            <h1>Time Tracking App</h1>
            <input 
                type="text" 
                value={taskInput} 
                onChange={(e) => setTaskInput(e.target.value)} 
                placeholder="Add new task" 
            />
            <button onClick={addTask}>Add Task</button>
            <div>
                <h2>Tasks</h2>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            {task.name} - Time: {task.time}s 
                            <button onClick={() => startTimer(task.id)} disabled={isRunning}>Start</button>
                            <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <h2>Total Time: {totalTime}s</h2>
        </div>
    );
};

export default App;