import { useSession } from 'next-auth/client';
import Header from '../components/header'
import { Container, Spinner, Button } from 'react-bootstrap'
import Link from 'next/link';
import Footer from '../components/footer';

const Profile = () => {
  const [session, loading] = useSession();

  if (loading) return (
    <>
        <Header />
        <Container fluid className="head">
            <div>
                <Spinner animation="border" variant="success" />
            </div>
        </Container>
    </>
  );
  if (!session) return (
    <>
    <Header />
    <Container fluid className="head">
        <div>
          <meta http-equiv="refresh" content="0;url=/api/auth/signin" />
          <h1>Redirecting to Sign In. If you aren't redirected, click <Link href="/api/auth/signin">here</Link></h1>
        </div>
    </Container>
    </>
  );

  return (
    <>
        <Header />
        <Container fluid className="my-head">
          <h1>My Decks</h1>
        </Container>
        <Container fluid className="my-container">
          
        </Container>
        <Footer />
    </>

  );
};

export default Profile;