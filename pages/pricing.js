import Footer from '../components/footer'
import Header from '../components/header'
import { Container, Button, Row, Col, ListGroup, Card } from 'react-bootstrap'
import Link from 'next/link'

const Pricing = () => (
  <>
    <Header />
    <div className="pricing-header">
      <Container>
        <h1>NovaDeck Pricing</h1>
        <h3>While NovaDeck is free forever, we still need to keep the lights on.</h3>
      </Container>
    </div>

    <div className="pricing-boxes">
      <Container>
        <h1>Pricing</h1>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <Card style={{ width: '100%' }}>
              <Card.Header as="h2" style={{ fontWeight: "600" }}>Free Forever</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Add Up To Three Additional Teachers / Assistant Teachers In A Deck!</ListGroup.Item>
                <ListGroup.Item>Integrated Games  To Make Learning Fun!</ListGroup.Item>
                <ListGroup.Item>Google Slides Connection</ListGroup.Item>
                <ListGroup.Item>Up to 100 Students Per Presentation</ListGroup.Item>
                <ListGroup.Item>Live Responses</ListGroup.Item>
                <ListGroup.Item>Download In-depth Class Data After The Slideshow Has Ended</ListGroup.Item>
                <ListGroup.Item>See Who Has Not Responded, Live!</ListGroup.Item>
                <ListGroup.Item>Multiple Types of Slides (Drawing, Draggable Responses, etc)</ListGroup.Item>
                <ListGroup.Item>Timelimit To Lock Student's Responses.</ListGroup.Item>
                <ListGroup.Item>Create Student-Paced Slideshows</ListGroup.Item>
                <ListGroup.Item>Optional Chatbox During The Presentation</ListGroup.Item>
                <ListGroup.Item>Add Audio And Video To Slides</ListGroup.Item>
                <ListGroup.Item>Some Ads (Ads are never on the presentation page)</ListGroup.Item>
                <ListGroup.Item>Live YouTube Videos</ListGroup.Item>
                <ListGroup.Item>Up To Two Response Types Per Slide</ListGroup.Item>
                 <ListGroup.Item>And So More More!</ListGroup.Item>
                <ListGroup.Item><h2>$0 / Month</h2></ListGroup.Item>
                <ListGroup.Item>
                    <Link href="/auth/login" passHref>
                        <Button variant="success">Get Started For Free!</Button>
                    </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '100%' }}>
              <Card.Header as="h2" style={{ fontWeight: "600" }}>Premium</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Same features as the Free Forever Plan</ListGroup.Item>
                <ListGroup.Item>Up To 10 Teachers / Assistant Teachers Per Slideshow</ListGroup.Item>
                <ListGroup.Item>Up to 200 students Per Presentation</ListGroup.Item>
                <ListGroup.Item>NO Ads</ListGroup.Item>
                <ListGroup.Item>Up to 5 response types Per Slide</ListGroup.Item>
                <ListGroup.Item>You're Able To Help Us Keep Adding New Features To Ensure Learning Stays Simple & Fun</ListGroup.Item>
                 <ListGroup.Item>And So More More!</ListGroup.Item> 
                <ListGroup.Item><h2>$20* / Month</h2></ListGroup.Item>
                <ListGroup.Item>
                    <Link href="/auth/login" passHref>
                        <Button variant="success">Get Started Now!</Button>
                    </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <h5>Our Pricing Page is subject to change at any time.</h5>
      </Container>
    </div>

    <Footer />
  </>
)

export default Pricing
