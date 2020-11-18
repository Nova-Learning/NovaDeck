import Header from '../components/header'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => (
  <>
    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      html, body {
          font-family: 'Montserrat', sans-serif;
      }

      .head {
        display: 'flex';
        justify-content: 'center';
        align-items: 'center', backgroundColor: '#23272a';
        color: 'white';
        font-family: 'Montserrat', sans-serif;
        height: 100%
      }

      .head h1 {
        font-weight: 700
      }
    `}
    </style>
    <Header />
    <Container className="head">
      <div>
        <h1>SlideDeck</h1>
      </div>
    </Container>
  </>
)

export default Home
