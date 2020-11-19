import Header from '../components/header'
import { Container, Row, Col, Button, Card, ListGroup, Form, FormControl, InputGroup } from 'react-bootstrap'
import Link from 'next/link'
import ReactPlayer from 'react-player'

const Home = () => (
  <>
    <Header />
    <Container fluid className="homepage-header">
      <div>
        <h1>Learning made fun and simple.</h1>
        <h3>Engaging and fun formative interactive assessments. By students, for students.</h3>
        <Row className="homepage-header-row" xs={1} sm={1} md={3} lg={3}>
          <Col xs="auto" sm="auto" md={3} lg={3} xl={3}>
            <Card style={{ marginBottom: "20px", height: "100%", width: "100%" }}>
              <Card.Header>Students: Join a Deck</Card.Header>
              <Container style={{ marginTop: "8px" }}>
                <InputGroup className="mb-2">
                  <FormControl id="joinPod" placeholder="Enter Code" />
                  <InputGroup.Append>
                    <Button variant="success">Join</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Container>

            </Card>
          </Col>
          <Col xs="auto" sm="auto" md={3} lg={3} xl={3}>
            <Card style={{ marginBottom: "20px", height: "100%", width: "100%" }}>
              <Card.Header>Teachers: Join now!</Card.Header>
              <Container style={{ marginTop: "8px", marginBottom: "8px" }}>
                <Link href="/api/auth/signin" passHref>
                  <Button block>Sign up for <strong>FREE</strong></Button>
                </Link>
              </Container>
            </Card>
          </Col>
          <Col xs="auto" sm="auto" md={3} lg={3} xl={3}>
            <Card style={{ marginBottom: "20px", height: "100%", width: "100%" }}>
              <Card.Header>Districts: Learn more</Card.Header>
              <Container style={{ marginTop: "8px", marginBottom: "8px" }}>
                <Link href="/api/auth/signin" passHref>
                  <Button block>Find out more</Button>
                </Link>
              </Container>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
    <Container fluid className="video-container">
      <h1>How it Works</h1>
      <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
    </Container>
    <Container className="features" style={{ marginTop: "20px" }}>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "700" }}>What makes us different?</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Header as="h2" style={{ fontWeight: "600" }}>Formative Assessments in many ways.</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Multiple Choice</ListGroup.Item>
              <ListGroup.Item>Short Answer</ListGroup.Item>
              <ListGroup.Item>Drawing</ListGroup.Item>
              <ListGroup.Item>True/False</ListGroup.Item>
              <ListGroup.Item>Paragraph / Long Answer</ListGroup.Item>
              <ListGroup.Item>Drag-and-Drop</ListGroup.Item>
              <ListGroup.Item>Sliders</ListGroup.Item>
              <ListGroup.Item>Much more!</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Header as="h2" style={{ fontWeight: "600" }}>Made by students, for students.</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Free Forever</ListGroup.Item>
              <ListGroup.Item>Short Answer</ListGroup.Item>
              <ListGroup.Item>Drawing</ListGroup.Item>
              <ListGroup.Item>True/False</ListGroup.Item>
              <ListGroup.Item>Paragraph / Long Answer</ListGroup.Item>
              <ListGroup.Item>Drag-and-Drop</ListGroup.Item>
              <ListGroup.Item>Sliders</ListGroup.Item>
              <ListGroup.Item>Much more!</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
)

export default Home
