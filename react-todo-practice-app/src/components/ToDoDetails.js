import '../components/ToDoDetails.css'

function ToDoDetails({todo}) {
    return (
        <div>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
        </div>
    );
}

export default ToDoDetails;
