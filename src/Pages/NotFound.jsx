import { Link } from 'react-router-dom'
import NotFoundImage from "../assets/images/error404.webp"

export const NotFound = () => {
    
    return (
        <>
            <h2>Página no encontrada</h2>
            <img 
                src={NotFoundImage}
                alt="Not Found"
                style={{width: "500px"}}
                />
                <br />
            <Link to="/">Volver al Inicio</Link>
        </>
    )
}