import 'tailwindcss/tailwind.css';
import { Layout } from '@src/components';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
