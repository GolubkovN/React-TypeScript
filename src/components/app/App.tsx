import React, {useState, useEffect} from 'react';

import {ITodo} from '../../interfaces/todo';

import Navbar from '../navbar/navbar';
import TodoForm from '../todoForm/todoForm';
import TododList from '../todoList/todoList';

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
      if (item.id === id) {
        item.completed = !item.completed
      }     
      console.log(item.id);
      
      return item
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
