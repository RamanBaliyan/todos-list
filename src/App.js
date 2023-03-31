import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import Todos from './myComponents/Todos';
import AddTodo from './myComponents/AddTodo';
import react, {useState} from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am raman baliyan");
  
  setTodos(todos.filter((e)=>{
    return e!==todo;
    }));
}
const addTodo = (title,desc) =>{
  console.log("i am Adding new todo",title,desc)
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
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
       );
}


export default App;
