import React from 'react';
import './App.css';
import Header from "./Header";
import ToDoList from "./ToDoList";

function App() {


  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    loadTitle(setData)
  }, []);

  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <p onClick={(function(){loadTitle(setData)}) }>{!data ? "Loading..." : data}</p>    
        <ToDoList/>
      </header>
    </div>
  );

}



function loadTitle(valueSetter){
  valueSetter(null)
  fetch("/api")
    .then((res) => res.json())
    .then((data) => valueSetter(data.message))
    .catch((error) => {
      console.error("Error: "+ error);
      valueSetter("To-Do (offline)");
    });
}

export default App;