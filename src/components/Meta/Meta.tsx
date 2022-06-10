import Head from 'next/head';
import Script from 'next/script';

export interface MetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

export const Meta: React.FC<MetaProps> = ({ title, keywords, description }: MetaProps) => (
  <>
    <Script
      src="https://kit.fontawesome.com/1e1f25269b.js"
      crossOrigin="anonymous"
      data-auto-replace-svg="nest"
    />
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta charSet="utf8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <meta name="theme-color" content="#151515" />

      <link rel="icon" href="/images/icons/favicon.ico" />
    </Head>
  </>
);
Meta.displayName = 'Meta';

Meta.defaultProps = {
  title: 'Nextjs Template',
  keywords: 'Nextjs Template',
  description: 'Nextjs Template',
};
