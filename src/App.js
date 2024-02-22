import './App.css';

// Importar el componente
import Saludo from './components/Saludo'; // No requiere Saludo extension por que babel lo hace solo

function App(){
    return(
        <div className='App'>
            <Saludo />
        </div>
    )
}

export default App;
