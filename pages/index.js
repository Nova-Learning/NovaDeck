import Header from '../components/header'
import { Container, Row, Col, Button, Card, ListGroup, Form, FormControl, InputGroup } from 'react-bootstrap'
import Link from 'next/link'

const Home = () => (
  <>
    <Header />
    <Container fluid className="homepage-header">
      <div>
        <h1>Learning made fun and simple.</h1>
        <h3>Engaging and fun formative interactive assessments. By students, for students.</h3>
        <Row className="homepage-header-row" xs={1} sm={1} md={3} lg={3}>
          <Col xs="auto" sm="auto" md={3} lg={3} xl={3}>
            <Card style={{ marginBottom: "20px" }}>
              <Card.Header>Students: Join a Deck</Card.Header>
              <Container style={{ marginTop: "8px" }}>
                <InputGroup className="mb-2">
                  <FormControl id="joinPod" placeholder="Code" />
                  <InputGroup.Append>
                    <Button variant="success">Join</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Container>

            </Card>
          </Col>
          <Col>
            <Card style={{ marginBottom: "20px" }}>
              <Card.Header>Teachers: Join now!</Card.Header>
              <Container style={{ marginTop: "8px", marginBottom: "8px" }}>
                <Link href="/api/auth/signin" passHref>
                  <Button block>Sign up for <strong>FREE</strong></Button>
                </Link>
              </Container>
            </Card>
          </Col>
          <Col>
            <Card style={{ marginBottom: "20px" }}>
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
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "700" }}>What makes us different?</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Header as="h2" style={{ fontWeight: "600" }}>Formative assessments in many ways.</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Multiple Choice</ListGroup.Item>
              <ListGroup.Item>Short Answer</ListGroup.Item>
              <ListGroup.Item>Drawing</ListGroup.Item>
              <ListGroup.Item>True/False</ListGroup.Item>
              <ListGroup.Item>Paragraph / Long Answer</ListGroup.Item>
              <ListGroup.Item>Drag-and-Drop</ListGroup.Item>
              <ListGroup.Item>Sliders</ListGroup.Item>
              <ListGroup.Item>Know the students who haven't yet responded</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Header as="h2" style={{ fontWeight: "600" }}>Made by students, for students.</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Free Forever</ListGroup.Item>
              <ListGroup.Item>Game-like features!</ListGroup.Item>
              <ListGroup.Item>Advanced teacher dashboard</ListGroup.Item>
              <ListGroup.Item>Major customizability</ListGroup.Item>
              <ListGroup.Item>Keeps students engaged</ListGroup.Item>
              <ListGroup.Item>Modern yet simple</ListGroup.Item>
              <ListGroup.Item>Google Slides integration</ListGroup.Item>
               <ListGroup.Item>View student responses live</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
)

export default Home
