import { useState } from 'react'
import { useRouter } from 'next/router'

const BuyOnce: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleCheckout = async (): Promise<void> => {
    setLoading(true)
    try {
      const response = await fetch('/api/create-purchase', {
        method: 'POST'
      })
      const data = await response.json()
      if (data.url !== undefined) {
        void router.push(data.url)
      } else {
        console.error('An error occurred:', data)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <h1>Buy Our Product</h1>
      <button onClick={() => { void handleCheckout() }} disabled={loading}>
        {loading ? 'Redirecting...' : 'Buy it now'}
      </button>
    </main>
  )
}
export default BuyOnce
