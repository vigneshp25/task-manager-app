const Button = ({children,...props}) => {
    return <button className="bg-stone-900 py-2 px-4 rounded text-stone-500 w-fit hover:bg-stone-700 hover:text-stone-300 cursor-pointer" {...props}>{children}</button>
}
export default Button;