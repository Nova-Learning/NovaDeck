import React from 'react'
import Header from '../../components/header'
import { Container, Button, Form, FormControl } from 'react-bootstrap'
import { providers, signIn } from 'next-auth/client'

export default function SignIn({ providers }) {
  return (
    <>
        <Header />
        <Container fluid className="head">
            {Object.values(providers).map(provider => (
            <div key={provider.name}>
                <Button style={{ backgroundColor: "white", color: "black", fontWeight: 700 }} onClick={() => signIn(provider.id)}>Please sign in with {provider.name} to continue.</Button>
            </div>
            ))}
        </Container>
    </>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context)
  }
}