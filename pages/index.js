import Header from '../components/header'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => (
  <>
    <Header />
    <Container fluid className="head">
      <div>
        <h1>SlideDeck</h1>
        <h3>An Open-Source Slideshow Extension</h3>
      </div>
    </Container>
  </>
)

export default Home
