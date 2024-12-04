import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pet Adoption Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Welcome to PawPals</h1>
        <p>Find your perfect pet companion.</p>
        <Link href="/explore">
          <button>Explore Pets</button>
        </Link>
        <Link href="/missing">
          <button>Missing Pets</button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
