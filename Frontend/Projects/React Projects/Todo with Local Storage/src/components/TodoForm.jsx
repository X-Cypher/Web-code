import { useState } from "react";
import useTodoContext from "../contexts/TodoContext";

function TodoForm() {
    
    const [text, setText] = useState("")
    const {addTodo} = useTodoContext()

    function add(e){
        e.preventDefault()
        if(text.trim().length == 0) return //kuch text diye bina add nhi krne denge
        addTodo(text)
        setText("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/40 rounded-l-lg px-3 outline-none duration-150 bg-white/30 py-1.5"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button 
                type="submit" 
                className="rounded-r-lg px-4 py-2 bg-white text-white shrink-0 transition-all duration-400 hover:bg-gray-200 active:scale-90 shadow-lg"
            >
                ➕
            </button>

        </form>
    );
}

export default TodoForm;

