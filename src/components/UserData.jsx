import PropTypes from "prop-types";

const UserData = ({ oneUser }) => {
    return (
        <li>
            <h3>{`${oneUser.id} - ${oneUser.first_name} ${oneUser.last_name}`}</h3>
            <img src={oneUser.avatar} alt={`${oneUser.first_name} ${oneUser.last_name}`} />
            <br />
            <a href={oneUser.email}>{oneUser.email}</a>
        </li>
    )
}

UserData.propTypes = {
    oneUser: PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
}

export default UserData;

