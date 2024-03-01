import PropTypes from "prop-types";
import UserData from "./UserData";

const Users = ({usersList}) => {
    return (
        <>
            <h3>Listado de Usuarios</h3>
            {usersList.length == 0 && <h4>No hay usuarios para mostrar</h4>}
            {usersList.length > 0 && (
                <ul>
                    {usersList.map(user => <UserData key={user.id} oneUser={user}/>)}
                </ul>
            )}

        </>
    )
}

Users.propTypes = {
    usersList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string
        })
    )
}

export default Users