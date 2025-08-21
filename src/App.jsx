import Button from "./components/Button"
import Intro from "./components/Intro"
import CreateNewProject from "./components/CreateNewProject"
import { useState } from "react"
import ProjectDetailsPage from "./components/ProjectDetailsPage";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [showCreateProjectPage, setShowCreateProjectPage] = useState(false);
  const [showProjectDetailsPage, setshowProjectDetailsPage] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  function handleCreateNewProject() {
    setShowCreateProjectPage(true);
    setshowProjectDetailsPage(false);
  }
  function handleCancel() {
    setShowCreateProjectPage(false);
  }
  function handleSave(project) {
    setProjectList((pre) => [...pre, project]);
    setShowCreateProjectPage(false);
  }
  function handleProjectDetails(index) {
    setshowProjectDetailsPage(true);
    setShowCreateProjectPage(false);
    setActiveProjectIndex(index);
  }
  function handleDeleteProject(index) {
    setProjectList((pre) => pre.filter((currentItem, currentIndex) => currentIndex !== index));
    setshowProjectDetailsPage(false);
  }
  function handleAddTask(projectIndex, taskText) {

    setProjectList((previousProjectList) => {
      return previousProjectList.map((currentProject, currentProjectIndex) => {
        if (currentProjectIndex === projectIndex) {
          return {
            ...currentProject,
            taskList: [...currentProject.taskList, taskText],
          };
        }
        return currentProject;
      })
    })
  }
  function handleDeleteTask(projectIndex, taskIndex) {
    setProjectList((previousProjectList) => {
      return previousProjectList.map((currentProject,currentProjectIndex)=>{
        if (currentProjectIndex === projectIndex) {
          return{
            ...currentProject,
            taskList: currentProject.taskList.filter((item,currentTaskIndex) => currentTaskIndex!==taskIndex ),
          }
        }
        return currentProject;
      })
    })
  }

  return (
    <section className="grid grid-rows-1 grid-cols-10 h-dvh">
      <aside className="bg-black rounded-tr-3xl col-span-2 flex flex-col mt-10 px-10">
        <h3 className="text-2xl font-bold uppercase pt-20 pb-10 text-stone-300">Your Projects</h3>
        <Button onClick={handleCreateNewProject}>+ Add Project</Button>
        <ul className="text-stone-300 py-10">
          {projectList.map(({ title }, index) => {
            return <li key={index} className="p-2 rounded hover:bg-stone-950 cursor-pointer" onClick={() => handleProjectDetails(index)}>{title}</li>;
          })}
        </ul>
      </aside>
      <section className="col-span-8 flex flex-col items-center my-10">
        {!showCreateProjectPage && !showProjectDetailsPage && <Intro OnCreate={handleCreateNewProject} />}
        {showCreateProjectPage && <CreateNewProject onCancel={handleCancel} onSave={handleSave} />}
        {showProjectDetailsPage && <ProjectDetailsPage {...projectList[activeProjectIndex]} index={activeProjectIndex} onDelete={handleDeleteProject} onTaskAdd={handleAddTask} onTaskDelete={handleDeleteTask} />}
      </section>
    </section>
  )
}

export default App
