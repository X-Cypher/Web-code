import { useState } from "react";
import useTodoContext from "../contexts/TodoContext";

function TodoItem({ todo, index }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [text, setText] = useState(todo.text);
    const { updateTodo, deleteTodo, toggleTodo } = useTodoContext();

    function editTodo() {
        updateTodo(todo.id, text);
        setIsTodoEditable(false);
    }

    function toggle() {
        toggleTodo(todo.id);
    }

    return (
        <div className={`flex items-center justify-between border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black 
        ${todo.completed ? "bg-[#2F855A] text-white" : "bg-[#394867] text-white"}`}>

            <span className="w-6 text-right font-bold">
                {index + 1}.
            </span> 

            <input 
                type="checkbox" 
                className="cursor-pointer accent-green-600 scale-110 transition-transform duration-200" 
                checked={todo.completed} 
                onChange={toggle} 
            />

            <input 
                type="text" 
                className={`flex-grow border outline-none bg-transparent rounded-lg 
                    ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} 
                    ${todo.completed ? "line-through" : ""}`} 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                readOnly={!isTodoEditable} 
            />

            {/* Edit/Save Button with Smooth Scaling and Rotation */}
            <button
                className="w-8 h-8 rounded-lg text-sm border border-black/10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 active:scale-90 transition-transform duration-200 hover:rotate-6"
                onClick={() => {

                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else {
                        setIsTodoEditable((prev) => !prev);
                    }
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            <button
                className="w-8 h-8 rounded-lg text-sm border border-black/10 flex items-center justify-center bg-white text-white hover:bg-red-300 active:scale-90 transition-transform duration-200 hover:animate-pulse"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
