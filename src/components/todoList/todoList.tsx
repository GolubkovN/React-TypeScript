import React from 'react';
import { ITodo } from '../../interfaces/todo';

type TodoListProps = {
    todos: ITodo[]
    onComplete(id: number): void
    onDelete(id: number): void
};

const TodoList: React.FC<TodoListProps> = ({todos, onComplete, onDelete}) => {
    const classes = ['todo'];

    const removeHandler = (evt: React.MouseEvent, id: number) => {
        evt.preventDefault();
        onDelete(id);
    };

    if(todos.length === 0) {
        return (<p className="center">Задачь, пока, нет!</p>);
    }

    return (
        <ul>
            {todos.map((item) => {
                 if (item.completed) {
                    classes.push('completed')
                }

               return <li className={classes.join(' ')} key={item.id}>
                    <label>
                        <input 
                            type="checkbox"
                            checked={item.completed} 
                            onChange={onComplete.bind(null, item.id)}
                        />
                        <span>{item.title}</span>
                        <i className="material-icons red-text" onClick={(evt) => removeHandler(evt, item.id)}>delete</i>
                    </label>
                </li>
            })}
        </ul>
    );
};

export default TodoList;