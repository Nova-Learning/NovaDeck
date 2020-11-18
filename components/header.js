import Link from 'next/link'
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { signin, signout, useSession } from 'next-auth/client';

const Header = () => {
  const [session, loading] = useSession();
  return (
    <header>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        html, body {
            font-family: 'Montserrat', sans-serif;
        }
      `}
      </style>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand style={{ fontWeight: 700 }}>SlideDeck</Navbar.Brand>
          </Link>
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link style={{ fontWeight: 600 }}>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link style={{ fontWeight: 600 }}>About</Nav.Link>
            </Link>
            <Link href="/pricing" passHref>
              <Nav.Link style={{ fontWeight: 600 }}>Pricing</Nav.Link>
            </Link>

          </Nav>
          <Form inline>
          {!session && (
                <Nav.Link
                  href="/api/auth/signin"
                  onClick={(e) => {
                    e.preventDefault();
                    signin();
                  }}
                  style={{
                    fontWeight: "600",
                  }}
                >
                  <Button variant="outline-success">Sign In</Button>
                </Nav.Link>
              )}
              {session && (
                <>
                  <Link href="/my">
                    <Nav.Link style={{ fontWeight: 600 }}>
                    <Button variant="success">My Decks</Button>
                    </Nav.Link>
                  </Link>
                  <Nav.Link
                    href="/api/auth/signout"
                    onClick={(e) => {
                      e.preventDefault();
                      signout();
                    }}
                    style={{
                      fontWeight: "600"
                    }}
                  >
                    <Button variant="outline-danger">Sign Out</Button>
                  </Nav.Link>
                </>
              )}
          </Form>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
