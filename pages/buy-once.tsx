import { useState } from 'react';

export default function HomePage() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('An error occurred:', data);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Buy Our Product</h1>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? 'Redirecting...' : 'Checkout'}
      </button>
    </div>
  );
}