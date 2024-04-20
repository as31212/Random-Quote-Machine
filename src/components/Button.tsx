
const Button = ({color,change})=>{

    return(
        <button id="new-quote" onClick={change} className={`${color}-background`}>New Quote</button>
    );
}

export default Button;