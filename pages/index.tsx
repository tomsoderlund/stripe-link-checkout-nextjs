import Link from 'next/link'

import packageJson from '../package.json'

const Home: React.FC = () => (
  <main>
    <h1>{packageJson.description}</h1>
    <div className='flex'>
      <Link href='/buy-once'>
        Buying Once
      </Link>
      <Link href='/buy-subscription'>
        Buying Subscription
      </Link>
    </div>
  </main>
)
export default Home
