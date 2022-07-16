import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Link from 'next/link';
export default function Home() {
  //this page can displayed with her folder path
  return (
    <div>
      <h1>Index page Next jS</h1>
      {/*this routes is just for client side rerendring */}
      <Link href="/route1">
        <a>Go to route1 routes Via Next Link</a>
      </Link>

      <Link href="/route1/[id]" as={'/route1/2'}>
        <a>Navigate with dynamic routes </a>
      </Link>
    </div>
  );
}
