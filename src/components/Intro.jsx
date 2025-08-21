import image from "../assets/Tasklogo.png"
import Button from "./Button";

const Intro = ({OnCreate}) => {
    return <section className="my-30 flex flex-col items-center justify-center">
        <img src={image} alt="task logo" className="w-24 -rotate-12"/>
        <h3 className="text-2xl font-bold text-stone-700 my-5">No Project Selected</h3>
        <p className="text-slate-700 mb-5">Select a project or getting started with a new one</p>
        <Button onClick={OnCreate}>Create New Project</Button>
    </section>
}
export default Intro;