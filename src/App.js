import { Route, Routes } from 'react-router-dom';
import { Layout } from "./components/Layout";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Products } from "./Pages/Products";
import { NotFound } from "./Pages/NotFound";

function App(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/products/*" element={<Products/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App;

/*
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

// Importar el componente
import Gretting from "./components/Gretting"; // No requiere el componente extension por que babel lo hace solo
import OwnContainer from "./components/Container";
import { StyledComponents } from './components/StyledComponents';

function App(){ // Aca utilizo los componentes que quiero renderizar.

    return(
        <Container>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Gretting text={"Trabajando con React"}/>     
                </Col>
                <Col sm={12} md={6} lg={8}>
                    <StyledComponents />
                    <Button variant="warning">Esto es un botón</Button>
                    <OwnContainer /> 
                </Col>
            </Row>

        </Container>
    )
}
*/
