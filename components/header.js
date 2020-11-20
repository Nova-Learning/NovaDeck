import Link from 'next/link'
import { Navbar, Nav, Form, FormControl, Button, Container, Badge } from 'react-bootstrap'
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
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                alt=""
                src="/media/LogoDesign.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                style={{ marginRight: '4px' }}
              />{' '}
              NovaDeck <Badge variant="primary" style={{ marginLeft: '4px' }}>Beta</Badge>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="expand-nav" />
          <Navbar.Collapse id="expand-nav">
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
                    href="/auth/login"
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
                    <Link href="/my" passHref>
                      <Nav.Link style={{ fontWeight: 600 }}>
                      <Button variant="success">My Decks</Button>
                      </Nav.Link>
                    </Link>
                    <Nav.Link
                      href="/api/auth/signout"
                      onClick={(e) => {
                        e.preventDefault();
                        signout({ callbackUrl: "/" });
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
