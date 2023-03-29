import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import Todos from './myComponents/Todos';

function App() {
  let todos = [{
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
  ]
  return (
    <>
    <Header title="TodosList" searchBar={true}/>
    <Todos todos={todos}/>
    <Footer/>
    </>
       );
}

export default App;
