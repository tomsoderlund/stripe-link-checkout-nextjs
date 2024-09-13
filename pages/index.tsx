import Link from 'next/link'

import packageJson from '../package.json'

const Home: React.FC = () => (
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
)
export default Home
