import Button from "./components/Button"
import Intro from "./components/Intro"

function App() {
  return (
    <section className="grid grid-rows-1 grid-cols-10 h-dvh">
      <aside className="bg-black rounded-tr-3xl col-span-2 flex flex-col mt-10 px-10">
        <h3 className="text-2xl font-bold uppercase pt-20 pb-10 text-stone-300">Your Projects</h3>
        <Button>+ Add Project</Button>
      </aside>
      <section className="col-span-8 flex flex-col items-center my-30">
        <Intro></Intro>
      </section>
    </section>
  )
}

export default App
