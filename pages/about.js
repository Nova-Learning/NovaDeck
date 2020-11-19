import Footer from '../components/footer'
import Header from '../components/header'
import { Container, Button } from 'react-bootstrap'
import Link from 'next/link'

const About = () => (
  <>
    <Header />
    <div className="about-header">
      <Container fluid>
        <h1>About NovaDeck</h1>
        <h3>Introducing the next generation of learning.</h3>
      </Container>
    </div>

    <div className="about-nl">
      <Container>
        <h1>What is Nova Learning?</h1>
        <h3>Nova Learning is an educational development group created by students, for students.</h3>
      </Container>
    </div>

    <div className="about-main">
      <Container>
        <h1>What is NovaDeck?</h1>
        <h3>NovaDeck, developed by Nova Learning, is a formative assessment program for slideshows.</h3>
      </Container>
    </div>

    <div className="about-contact">
      <Container>
        <h1>Have any questions?</h1>
        <h3>Feel free to contact us.</h3>
        <h1>TODO: ADD A CONTACT FORM</h1>
      </Container>
    </div>

    <Footer />
  </>
)

export default About
