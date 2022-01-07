import 'tailwindcss/tailwind.css';
import { Layout } from '@src/components';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
