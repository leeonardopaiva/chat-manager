import React, { useEffect, useState } from 'react';
import TaskList from './components/ChatList';
import TaskForm from './components/ChatForm';
import Chat from './components/Chat';
import api from './services/myapi';
import { Task } from './types/chat';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    //API
    api.get<Task[]>('/todos?_limit=4').then((response) => {
      setTasks(response.data);
    });
  }, []);

  //ADD
  const addTask = (title: string) => {
    const newTask: Task = { id: Date.now(), title, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  //DEL
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  const deleteCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <div className='container'>
      <h1>Gerenciamento de Tarefas com Chat</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onDeleteCompletedTasks={deleteCompletedTasks}
      />
      <Chat />
    </div>
  );
};

export default App;