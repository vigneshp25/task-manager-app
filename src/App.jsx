import Button from "./components/Button"
import Intro from "./components/Intro"
import CreateNewProject from "./components/CreateNewProject"
import { useState } from "react"
import ProjectDetailsPage from "./components/ProjectDetailsPage";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [showCreateProjectPage, setShowCreateProjectPage] = useState(false);
  const [showProjectDetailsPage, setshowProjectDetailsPage] = useState(false);

  function handleCreateNewProject() {
    setShowCreateProjectPage(true);
  }
  function handleCancel() {
    setShowCreateProjectPage(false);
  }
  function handleSave(project) {
    setProjectList((pre) => [...pre, project]);
    setShowCreateProjectPage(false);
  }
  function handleProjectDetails (title, desc, date){

  }

  return (
    <section className="grid grid-rows-1 grid-cols-10 h-dvh">
      <aside className="bg-black rounded-tr-3xl col-span-2 flex flex-col mt-10 px-10">
        <h3 className="text-2xl font-bold uppercase pt-20 pb-10 text-stone-300">Your Projects</h3>
        <Button onClick={handleCreateNewProject}>+ Add Project</Button>
        <ul className="text-stone-300 py-10">
          {projectList.map(({ title, desc, date }, index) => {
            return <li key={index} className="p-2 rounded hover:bg-stone-950 cursor-pointer" onClick={() => handleProjectDetails(title, desc, date)}>{title}</li>;
          })}
        </ul>
      </aside>
      <section className="col-span-8 flex flex-col items-center my-30">
        {!showCreateProjectPage && <Intro OnCreate={handleCreateNewProject} />}
        {showCreateProjectPage && <CreateNewProject onCancel={handleCancel} onSave={handleSave} />}
        {showProjectDetailsPage && <ProjectDetailsPage />}
      </section>
    </section>
  )
}

export default App
