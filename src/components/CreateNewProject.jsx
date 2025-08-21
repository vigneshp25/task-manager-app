import Button from "./Button"
import Dialog from "./Dialog";
import InputBox from "./InputBox"
import { useRef, useState } from "react"

const CreateNewProject = ({ onCancel, onSave }) => {
    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();
    const dialogRef = useRef();
    return <section className="w-full p-20 pr-60">
        <div className="flex flex-row justify-end gap-1">
            <Button btntype="secondary" onClick={onCancel}>Cancel</Button>
            <Button onClick={() => {
                if (titleRef.current.value != '' && descRef.current.value != '' && dateRef.current.value != '') {
                    let project = {
                        title: titleRef.current.value,
                        desc: descRef.current.value,
                        date: dateRef.current.value,
                    }
                    return onSave(project)
                } else {
                    dialogRef.current.open();
                }
            }}>Save</Button>
        </div>
        <InputBox ref={titleRef} type="text">Title</InputBox>
        <InputBox ref={descRef} type="textarea">Description</InputBox>
        <InputBox ref={dateRef} type="date">Due Date</InputBox>
        <Dialog ref={dialogRef} />
    </section>
}
export default CreateNewProject