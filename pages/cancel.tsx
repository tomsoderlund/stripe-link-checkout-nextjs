import Link from 'next/link'

const Cancel: React.FC = () => (
  <main>
    <h1>Cancelled</h1>
    <Link className='button' href='/'>
      Back to start
    </Link>
  </main>
)
export default Cancel
