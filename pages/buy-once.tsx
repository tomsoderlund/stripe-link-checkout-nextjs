import { useState } from 'react'

const BuyOnce: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const handleCheckout = async (): Promise<void> => {
    setLoading(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST'
      })
      const data = await response.json()
      if (data.url === undefined) {
        window.location.href = data.url
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
      <button onClick={(e) => { void handleCheckout() }} disabled={loading}>
        {loading ? 'Redirecting...' : 'Checkout'}
      </button>
    </main>
  )
}
export default BuyOnce
