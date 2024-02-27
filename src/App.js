import './App.css';

// Importar el componente
import Saludo from './components/Saludo'; // No requiere Saludo extension por que babel lo hace solo

function App(){
    const age = 50; // declaro age
    return(
        <div className='App'>
            {age > 10 ? <Saludo/> : "" } 
        </div>
    )
}

export default App;
