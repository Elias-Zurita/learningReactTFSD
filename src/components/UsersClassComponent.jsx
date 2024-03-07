import { Component } from "react";
import UserData from "./UserData";

class UsersClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            usersList: [],
            isLoading: true
        }
    }

    componentDidMount() {
        ( async () => {
            const API_URL = "https://reqres.in/api/users?per_page=20";
            const apiResponse = await fetch(API_URL).then(response => response.json()); // Trae la info de texto a JSON
            const {data} = apiResponse; // "data" es una de las propiedades que tiene la API
            this.setState({ usersList: data, isLoading: false }); //actualizo el userList con la data que llega desde la API
        })();
    }

    render() {
        const { isLoading, usersList } = this.state
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
}

export default UsersClassComponent;