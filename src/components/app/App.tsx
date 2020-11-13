import React, {useState} from 'react';

import {ITodo} from '../../interfaces/todo';

import Navbar from '../navbar/navbar';
import TodoForm from '../todoForm/todoForm';
import TododList from '../todoList/todoList';

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);

  const addhandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    }
    setTodos((prev) => [newTodo, ...prev])    
  };

  const completeHandler = (id: number) => {
    setTodos((prev) => prev.map((item) => {
      return {
        ...item,
        completed: !item.completed
      }      
    }))
  };

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm('действительно удалить задачу?');
    if(shoudRemove) {
      setTodos((prev) => prev.filter((item) => item.id !== id))
    }
  };

  return (
  <>
    <Navbar />
    <div className="container">
    <TodoForm onAdd={addhandler}/>
    <TododList todos={todos} onComplete={completeHandler} onDelete={removeHandler}/>
    </div>
  </>
  )
};

export default App;
