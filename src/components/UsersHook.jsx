import { useState, useEffect } from "react";
import UserData from "./UserData";

const UsersHook = () => {
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("Component mount!")
        if (value != 0 ){
            console.log("Component updated!");
        }   
        if (isLoading != true){
            console.log("Esto se ejecuto una sola vez");
        }
        return() => {
            console.log("Se desmonto el componente");
        }
    }, [value, isLoading]);

    useEffect(() => {
        console.log("Component updated")
    }, [value]);

    useEffect(() => {
        console.log("Esto se ejecuta solo una vez")
    }, [isLoading]);

    useEffect(() => {
        ( async () => {
            const API_URL = "https://reqres.in/api/users?per_page=20";
            const apiResponse = await fetch(API_URL).then(response => response.json()); // Trae la info de texto a JSON
            const {data} = apiResponse; // "data" es una de las propiedades que tiene la API
            setUsersList(data);
            setIsLoading(false)
        })();
    }, []);

    return (
        <>
            <h3>Listado de Usuarios</h3>
            
            {isLoading && <h4>Cargando...</h4>} 
                
                {!isLoading && (
                    <ul>
                        {usersList.map(user => <UserData key={user.id} oneUser={user}/>)}
                    </ul>
                )} 
        </>
    )
}

export default UsersHook