import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <div className="container">
                <h2>React Router</h2>
                <hr/>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <Outlet />
                <footer>
                    <hr/>
                    <p>Copyright -2024</p>
                </footer>

            </div>
        </>
    )
}