import './button.css'
const Button=({text,type,span,onClick})=> {
    return <button className={span} onClick={()=>onClick(text,type)}>{text}</button>
}
export default Button