import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2024-06-20' })

export default async function handler (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'POST') {
    try {
      const origin = req.headers.origin ?? 'http://localhost:3110'

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card', 'link'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Sample Product'
              },
              unit_amount: 500 // Amount in cents ($5.00)
            },
            quantity: 1
          }
        ],
        mode: 'payment',
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cancel`
      })

      res.status(200).json({ url: session.url })
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error'
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
