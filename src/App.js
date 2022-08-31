import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,Container,Button,Form } from "react-bootstrap";
import { Link, Route, Routes,BrowserRouter} from "react-router-dom";
import Earrings from './components/Earrings';
import Home from "./components/Home";



function App() {
  return (
    <div className="App">
            <BrowserRouter>
            <div>
                <Navbar bg="light" expand="lg">
                <Container fluid>
                <Navbar.Brand href="#">Ghostengines </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/Earrings'>Earrings</Nav.Link>
                    <Nav.Link as={Link} to='/Braclets'>Braclets</Nav.Link>
                    <Nav.Link as={Link} to='/Rings'>Rings</Nav.Link>
                    <Nav.Link as={Link} to='/Neclaces'>Neclaces</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search for Jewellery"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route path="/Earrings"element={<Earrings/>}/>
                    <Route path="/"element={<Home/>}/>
                    <Route path="/Earrings"element={<Earrings/>}/>
                    <Route path="/Braclets"element={<Earrings/>}/>
                    <Route path="/Rings"element={<Earrings/>}/>
                    <Route path="/Neclaces"element={<Earrings/>}/>
                </Routes>
            </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
