import React from 'react';

import Navbar from '../navbar/navbar';
import TodoForm from '../todoForm/todoForm';

const App: React.FC = () => {

  const addhandler = (title: string) => {
    console.log(`add new todo`, title);
    
  };

  return (
  <>
    <Navbar />
    <div className="container">
    <TodoForm onAdd={addhandler}/>
    </div>
  </>
  )
};

export default App;
