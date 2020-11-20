import React from 'react'
import Header from '../../components/header'
import { Container, Button, Form, FormControl, Row, Col } from 'react-bootstrap'
import { providers, signIn, csrfToken } from 'next-auth/client'
import { FcGoogle } from 'react-icons/fc'
import Footer from '../../components/footer'

export default function SignIn({ providers }) {
  return (
    <>
        <Header />
        <title>Login | NovaDeck</title>
        <Container fluid className="login-head">
            <Row>
                <Col className="my-auto">
                  <Button variant="light" size="lg" block onClick={() => signIn("google", { callbackUrl: "/my" })} style={{ fontWeight: 600 }}><FcGoogle /> Sign in with Google</Button>
                </Col>
            </Row>

        </Container>
        <Footer />
    </>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context)
  }
}