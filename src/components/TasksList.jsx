import Button from "./Button";
import { useState, useRef } from "react";

const TaskList = ({ taskList, onAdd, onDelete, projectIndex}) => {
    
    const taskInputRef = useRef();
    const hasTasks = taskList && taskList.length > 0;
    function handleClick(){
        let taskText = taskInputRef.current.value.trim();
        if (taskText !== ''){
            onAdd(projectIndex,taskText);
            taskInputRef.current.value = '';
            taskInputRef.current.focus();
        }
    }

    return <section className="w-full">
        <h3 className="text-4xl font-bold text-stone-700 my-5">Tasks</h3>
        <div className="flex flex-row w-full">
            <input ref={taskInputRef} type="text" className="w-1/2 border-b-2 p-2 border-gray-300 bg-stone-200 text-slate-700" />
            <Button onClick={handleClick}>Add Task</Button>
        </div>
        {
            hasTasks &&
            <div className="h-[125px] overflow-y-auto pr-2 mt-10">

                <ul className="p-2">
                    {taskList.map((item, index) => {
                        return <li key={index} className="flex flex-row mb-2">
                            <p className="w-1/2 border-b border-slate-300">{item}</p>
                            <button
                                className="bg-stone-100 py-1 px-2 rounded text-stone-400 w-fit hover:bg-red-300 hover:text-red-700 cursor-pointer"
                                onClick={() => onDelete(projectIndex, index)}>clear</button>
                        </li>
                    })}
                </ul>
            </div>
        }
    </section>
}
export default TaskList;