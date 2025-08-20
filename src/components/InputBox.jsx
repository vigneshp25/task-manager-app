import { forwardRef } from "react";

const InputBox = forwardRef (({ children, type, value, ...props },ref) => {
    const inputClass = "border-b-2 p-2 border-gray-300 bg-stone-200 text-slate-700";
    return <p className="flex flex-col pb-5">
        <label className="uppercase font-semibold text-slate-700">{children}</label>
        {(type == 'text' || type == 'date') &&
            <input type={type} ref={ref} {...props} className={inputClass} required/>}
        {(type == 'textarea') &&
            <textarea {...props} ref={ref} type={type} className={inputClass}></textarea>}

    </p>
})

export default InputBox;