//Importing modules
import React, {useState, useEffect} from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap'
import getPageCount from './getPageCount';


export default function NavBar() {

  const [count, setCount] = useState("Loading...");

  useEffect(() => {
    getPageCount().then(res => setCount(res))
    }, [])


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item><Nav.Link href="/pick-a-colour">Choose Colour</Nav.Link></Nav.Item>
          </Nav>
          <Nav>
            <Navbar.Text>Page Counter: {count}</Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
