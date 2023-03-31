import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import Todos from './myComponents/Todos';
import react, {useState} from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am raman baliyan");
  
  setTodos(todos.filter((e)=>{
    return e!==todo;
    }));
}
  
  const [todos, setTodos] = useState([
    {
    sno: 1,
    title: "Raman is best",
    desc: "First"
  },
  {
    sno: 2,
    title: "Raman is better",
    desc: "Second" 
  },
  {
    sno: 3,
    title: "Raman is good",
    desc: "Third"
  }
  ]);
  return (
    <>
    <Header title="TodosList" searchBar={true}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
       );
}


export default App;
