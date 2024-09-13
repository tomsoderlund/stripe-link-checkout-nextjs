import { useState } from 'react'
import { useRouter } from 'next/router'

const BuySubscription: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleCheckout = async (): Promise<void> => {
    setLoading(true)
    try {
      const response = await fetch('/api/create-checkout-subscription-session', {
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
      <h1>Subscribe to Our Service</h1>
      <p>Access premium features for $5 per month.</p>
      <button onClick={() => { void handleCheckout() }} disabled={loading}>
        {loading ? 'Processing...' : 'Buy a subscription'}
      </button>
    </main>
  )
}
export default BuySubscription
