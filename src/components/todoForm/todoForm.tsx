import React, {useRef} from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null);

    const onKeyPressHandler = (evt: React.KeyboardEvent) => {
        if (evt.key === 'Enter') {            
            props.onAdd(ref.current!.value); 
            ref.current!.value = ""
        }
    }

    return(
        <div className="input-field mt2">
            <input 
                onKeyPress={onKeyPressHandler}
                ref={ref}
                type="text"    
                id="title" 
                placeholder="Введите название дела"
            />
            <label className="active" htmlFor="title">
                Введите название дела
            </label>
        </div>
    );
};

export default TodoForm;