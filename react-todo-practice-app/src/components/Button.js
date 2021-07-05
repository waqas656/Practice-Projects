import '../components/Button.css'

function Button(btnText, execFunc) {

    return (
        <button className="btn" onClick={execFunc.onClick}>{btnText.text}</button>
    );
}

export default Button;
