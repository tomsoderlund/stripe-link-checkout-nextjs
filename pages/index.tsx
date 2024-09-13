import Link from 'next/link'

import packageJson from '../package.json'

const Home: React.FC = () => (
  <main>
    <h1>{packageJson.description}</h1>
    <ul>
      <li>
        <Link href='/buy-once'>
          Buying Once
        </Link>
      </li>
      <li>
        <Link href='/buy-subscription'>
          Buying Subscription
        </Link>
      </li>
    </ul>
  </main>
)
export default Home
