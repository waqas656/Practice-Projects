import '../components/Modal.css';
import '../components/Button.css';

function Modal(props) {
    const { onClick, updateTodoState, todoId } = props; //object destructuring

    
    function handleDelete() {

        updateTodoState(todoId);

        onClick();

    }

    // function removeTodoElementFromArray(){
    //     const index = data.findIndex(todo => todo.id === todoId);

    //     if (index === -1) return;

    //     return data.splice(index, 1);
    // }

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn-alt" onClick={handleDelete}>Confirm</button>
            <button className="btn" onClick={props.onClick}>Cancel</button>
        </div>
    );

}

export default Modal;