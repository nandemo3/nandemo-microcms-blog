import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Simple Blog',
  description: 'A simple blog presented by microCMS',
  openGraph: {
    title: 'Simple Blog',
    description: 'A simple blog presented by microCMS',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};


export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <html lang="ja">
      <body>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header tags={tags.contents} title="nandemo's blog"/>
            <main>{children}</main>
          </Container>
          <Footer 
            description="頑張ろう！"
          />
      </body>
    </html>
  );
}
