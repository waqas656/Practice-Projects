import { useState } from 'react';
import './App.css';
import Card from './components/Card';

var data = [
  {
    id: 1,
    title: "Learn Java",
    description: "Learn Spring boot and databases"
  },
  {
    id: 2,
    title: "Learn React",
    description: "Build alot of projects in react"
  },
  {
    id: 3,
    title: "Learn Database in detail",
    description: "Watch Hussein Nasir's tutorials and other book marked Database Tutorials"
  },
  {
    id: 4,
    title: "a",
    description: "a"
  }
]
// function removeTodo(id){
//   // const newState = this.state;
//     const index = data.findIndex(a => a.id === id);

//     if (index === -1) return;

//     data.splice(index, 1);

// }



function App() {

  const [stateData  , setStateData] = useState(data);


  // I AM PASSING BELOW FUNCTION AS CALLBACK THAT TAKES A PARAMETER AND CALLING IT WITH PARAMETER WHEREVER I WANT

  function removeTodoElementFromArray(todoId){
    const index = data.findIndex(todo => todo.id === todoId);
  
    if (index === -1) return;
  
    setStateData(data.splice(index, 1));
  }

  return (
    <div className="App">
      { data.map(todo => <Card todo={todo} updateTodoState={removeTodoElementFromArray}/> ) }
    </div>
  );
}

export default App;
