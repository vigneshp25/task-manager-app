import Button from "./Button"
import InputBox from "./InputBox"
import { useRef } from "react"

const CreateNewProject = ({ onCancel, onSave }) => {
    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();


    return <section className="w-full p-20 pr-60">
        <div className="flex flex-row justify-end gap-1">
            <Button btntype="secondary" onClick={onCancel}>Cancel</Button>
            <Button onClick={() => {
                let project = {
                    title: titleRef.current.value,
                    desc: descRef.current.value,
                    date: dateRef.current.value,
                }
                console.log(project);
                return onSave(project)
            }}>Save</Button>
        </div>
        <InputBox ref={titleRef} type="text">Title</InputBox>
        <InputBox ref={descRef} type="textarea">Description</InputBox>
        <InputBox ref={dateRef} type="date">Due Date</InputBox>
    </section>
}
export default CreateNewProject