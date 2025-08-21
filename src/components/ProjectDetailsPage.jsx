import TaskList from "./TasksList";
import Button from "./Button";

const ProjectDetailsPage = ({ title, desc, date, index,taskList, onDelete, onTaskAdd, onTaskDelete }) => {
    return <section className="w-full p-20">
        <div className="flex flex-row-reverse">
            <Button btntype="secondary" onClick={() => onDelete(index)}>Delete Project</Button>
        </div>
        <h3 className="text-4xl font-bold text-stone-700 mb-5">{title}</h3>
        <p className="text-slate-500 mb-5 px-1">
            {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
            }).toUpperCase()}
        </p>
        <p className="text-slate-700 mb-5 px-1">{desc}</p>
        <hr className="border-b-2 border-slate-300" />

        <TaskList taskList={taskList} onAdd={onTaskAdd} onDelete={onTaskDelete} projectIndex={index} />

    </section>
}
export default ProjectDetailsPage;