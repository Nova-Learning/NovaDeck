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
                <ListGroup.Item>Up to 3 Teachers per Slideshow</ListGroup.Item>
                <ListGroup.Item>Integrated Games</ListGroup.Item>
                <ListGroup.Item>Google Slides Connection</ListGroup.Item>
                <ListGroup.Item>Up to 100 students per class</ListGroup.Item>
                <ListGroup.Item>Live Responses</ListGroup.Item>
                <ListGroup.Item>Download In-depth class data after the slideshow has ended</ListGroup.Item>
                <ListGroup.Item>See who has not responded</ListGroup.Item>
                <ListGroup.Item>Multiple Types of Slides (Drawing, Draggable Responses, etc)</ListGroup.Item>
                <ListGroup.Item>Timelimit to lock student's responses.</ListGroup.Item>
                <ListGroup.Item>Create Student-Paced Slideshows</ListGroup.Item>
                <ListGroup.Item>Optional Chatbox during the presentation</ListGroup.Item>
                <ListGroup.Item>Add audio and video to slides</ListGroup.Item>
                <ListGroup.Item>Some ads (Ads are never on the presentation page)</ListGroup.Item>
                <ListGroup.Item>Live YouTube Videos</ListGroup.Item>
                <ListGroup.Item>Up to two response types per slide</ListGroup.Item>
                <ListGroup.Item><h2>$0 / Month</h2></ListGroup.Item>
                <ListGroup.Item>
                    <Link href="/auth/login" passHref>
                        <Button variant="success">Get Started</Button>
                    </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '100%' }}>
              <Card.Header as="h2" style={{ fontWeight: "600" }}>Premium</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Same features as the Free Forever plan</ListGroup.Item>
                <ListGroup.Item>Up to 10 teachers per slideshow</ListGroup.Item>
                <ListGroup.Item>Up to 200 students per class</ListGroup.Item>
                <ListGroup.Item>NO Ads</ListGroup.Item>
                <ListGroup.Item>Up to 5 response types per slide</ListGroup.Item>
                <ListGroup.Item><h2>$20* / Month</h2></ListGroup.Item>
                <ListGroup.Item>
                    <Link href="/auth/login" passHref>
                        <Button variant="success">Get Started</Button>
                    </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <h5>* subject to change.</h5>
      </Container>
    </div>

    <Footer />
  </>
)

export default Pricing
