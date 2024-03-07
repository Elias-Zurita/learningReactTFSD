import './App.css';

// Importar el componente
import Gretting from "./components/Gretting"; // No requiere el componente extension por que babel lo hace solo
import UsersHook from "./components/UsersHook";
//import UsersClassComponent from "./components/UsersClassComponent";
//import Users from "./components/Users";
//import Counter from "./components/Counter";
//import Button from "./components/Button";
//import USERS_DATA from "./data/users.json";  // de donde va a consumir los usuarios

function App(){ // Aca utilizo los componentes que quiero renderizar.
    return(
        <div className="App">
            <Gretting text={"Trabajando con React"}/> 
            <UsersHook />
            {/* <Counter subject="React" developerName="Jane" />
            <Users usersList={USERS_DATA}/> */}
        </div>
    )
}

export default App;