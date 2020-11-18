import { useSession } from 'next-auth/client';
import Header from '../components/header'
import { Container, Spinner, Button } from 'react-bootstrap'
import Link from 'next/link';

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
            <h1>Please Sign In to view this page.</h1>
        </div>
    </Container>
    </>
  );

  return (
    <>
        <Header />
        <Container fluid className="head">

        </Container>
    </>

  );
};

export default Profile;