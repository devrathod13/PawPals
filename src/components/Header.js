import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header>
      <Link href="/">
        <h1>Pawpal</h1>
      </Link>
      {session ? (
        <div>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <nav className="nav-right">
          
        </nav>
      )}
    </header>
  );
}
