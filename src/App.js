import { useState } from "react";

function App() {
  const completedStyle = {
    fontStyle: "italic",
    color: "green",
    textDecoration: "line-through",
  };

  const [todo, setTodos] = useState([
    {
      text: "Learn React",
      completed: false,
    },
    {
      text: "Learn TypeScript",
      completed: false,
    },
  ]);

  const addTodo = (text) => {
    // check if the text is empty
    if (text === "") {
      alert("Please enter a todo");
    } else {
      setTodos([...todo, { text, completed: false }]);
    }
  };

  const completeTodo = (index) => {
    const newTodos = [...todo];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const uncompleteTodo = (index) => {
    const newTodos = [...todo];
    newTodos[index].completed = false;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <input type="text" id="addTodo"/>
      <button onClick={() => addTodo(document.getElementById("addTodo").value)}>
        {" "}
        Add{" "}
      </button>

      <ul>
        {todo.map((todo, index) => (
          <li key={index} style={todo.completed ? completedStyle : null}>
            {todo.text}

            {todo.completed ? (
              <button onClick={() => uncompleteTodo(index)}>Uncomplete</button>
            ) : (
              <button onClick={() => completeTodo(index)}>Complete</button>
            )}

            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
