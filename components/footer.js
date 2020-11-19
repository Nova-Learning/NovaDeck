import { Container, Navbar } from 'react-bootstrap'

const Footer = () => (
  <>
    <Navbar expand="lg" variant="dark" bg="dark" sticky="bottom">
            <Container>
                <div className="footer">
                    Made with <span className="heart">❤</span> in the USA
                    <br/>
                    Copyright 2020 © <a href="https://github.com/Nova-Learning">Nova Learning</a>
                </div>
            </Container>
    </Navbar>
  </>
)

export default Footer
