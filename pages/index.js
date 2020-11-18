import Header from '../components/header'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => (
  <>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      html, body {
          font-family: 'Montserrat', sans-serif;
      }
    `}
    </style>
    <Header />
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h1>Hello!</h1>
      </div>
    </Container>
  </>
)

export default Home
