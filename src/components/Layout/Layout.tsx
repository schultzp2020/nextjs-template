import { Meta, VersionSelector } from '@src/components';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Meta />
      <VersionSelector />
      {children}
    </div>
  );
}
Layout.displayName = 'Layout';
