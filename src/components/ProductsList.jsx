import { Link } from 'react-router-dom'

export const ProductsList = ({ products = [] }) =>{
    return (

        <>
            <h2>Products page</h2>

            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id}>
                            <h2>{product.title}</h2>
                            <p>El ID es: {product.id}</p>
                            <img 
                                src={product.thumbnail} 
                                alt={product.thumbnail} 
                                style={{
                                    width:"100px", 
                                    marginBottom: "10px"
                                }}/>
                            <br />
                            <Link 
                                to={`/products/${product.id}`}
                                className="btn btn-primary"
                            >Ver detalle</Link>
                            <hr/>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

