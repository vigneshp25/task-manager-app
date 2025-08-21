import { createPortal } from "react-dom";
import Button from "./Button";
import { forwardRef, useImperativeHandle, useRef } from "react";

//useImperative handle and give the showModal alone
const Dialog = forwardRef(({ }, ref) => {
    const dialog1 = useRef();
    useImperativeHandle(ref, () => {
        return { open() { dialog1.current.showModal(); } };
    });
    return createPortal(
        <dialog
            ref={dialog1}
            className="rounded-2xl p-10 max-w-lg w-11/12 text-center bg-white shadow-xl 
               fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <p className="mb-6 text-lg">Fill all the fields to create a project</p>
            <form method="dialog" className="flex justify-center">
                <Button>OK</Button>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
})

export default Dialog;