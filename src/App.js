import './App.css';

// Importar el componente
import Gretting from "./components/Gretting"; // No requiere el componente extension por que babel lo hace solo
import Container from "./components/Container";
import { TodoContextProvider } from './components/ToDoList/TodoContext';

function App(){ // Aca utilizo los componentes que quiero renderizar.

    return(
        <div className="App">
            <Gretting text={"Trabajando con React"}/> 
            <Container />
        </div>
    )
}

export default App;