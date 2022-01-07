import Head from 'next/head';

export interface MetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

export const Meta: React.FC<MetaProps> = ({ title, keywords, description }: MetaProps) => (
  <Head>
    <title>{title}</title>
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />

    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
    />
    <meta name="theme-color" content="#151515" />

    <link rel="icon" href="/images/icons/favicon.ico" />
  </Head>
);
Meta.displayName = 'Meta';

Meta.defaultProps = {
  title: 'Nextjs Template',
  keywords: 'Nextjs Template',
  description: 'Nextjs Template',
};
