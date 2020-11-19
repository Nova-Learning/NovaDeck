import { Provider } from 'next-auth/client';
import '../public/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header';
import Footer from '../components/footer';

const App = ({ Component, pageProps }) => {
  const { session } = pageProps;
  return (
    <Provider options={{ site: process.env.SITE }} session={session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
