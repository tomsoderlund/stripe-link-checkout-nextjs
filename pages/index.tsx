import Link from 'next/link'

import packageJson from "../package.json";


export default function Home() {
  return (
    <main>
      <h1>{packageJson.description}</h1>
      <div className='flex'>
        <Link className='button' href='/buy-once'>
          Buy Once
        </Link>
        <Link className='button' href='/buy-subscription'>
          Buy Subscription
        </Link>
      </div>
    </main>
  );
}
