import Link from 'next/link'

const Success: React.FC = () => (
  <main>
    <h1>Success!</h1>
    <Link className='button' href='/'>
      Back to start
    </Link>
  </main>
)
export default Success
