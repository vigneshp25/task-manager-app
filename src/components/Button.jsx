const Button = ({children,btntype = 'primary',...props}) => {
    const primaryButtonClass = "bg-stone-900 py-2 px-4 rounded text-stone-400 w-fit hover:bg-stone-700 hover:text-stone-300 cursor-pointer";
    const secondaryButtonClass = "bg-stone-100 py-2 px-4 rounded text-stone-400 w-fit hover:bg-red-300 hover:text-red-700 cursor-pointer";
    let buttonClass;
    if (btntype === 'primary'){
        buttonClass = primaryButtonClass;
    } else if (btntype === 'secondary'){
        buttonClass = secondaryButtonClass;
    }
    return <button btntype={btntype} className={buttonClass} {...props}>{children}</button>
}
export default Button;