# Stripe Link Checkout for Next.js and React: A Reference Implementation

![Stripe Next.js](https://dtf.digital/wp-content/uploads/2022/11/link-by-stripe.jpg)

## Introduction

This is a reference implementation of **Stripe Link Checkout** integrated with a **Next.js**/**React** application using **TypeScript**. The project demonstrates how to set up a simple e-commerce flow where users can purchase a **product or subscription** using Stripe's **Link** payment method with minimal coding effort.

Blog post: https://www.tomsoderlund.com/programming/stripe-link-checkout-nextjs-react

## Features

- **Stripe Link Integration**: Supports the Link payment method for a faster checkout experience.
- **Next.js with TypeScript**: Utilizes Next.js API routes and pages written in TypeScript.
- **Minimal Setup**: Designed for quick setup and deployment.
- **Secure**: Keeps sensitive information like API keys out of the client-side code.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/stripe-link-checkout-nextjs.git
cd stripe-link-checkout-nextjs
```

### Install Dependencies

Install the required npm packages:

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the root directory and add your Stripe Secret Key:

```env
# .env.local
STRIPE_SECRET_KEY=your_stripe_secret_key_here
```

> **Note:** Never commit your `.env.local` file or expose your secret keys in version control.

## Running the Development Server

Start the Next.js development server on port **3011**:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3011` to view the application.

## Project Structure

- **pages/api/create-purchase.ts**: API route that creates a Stripe Checkout Session.
- **pages/index.tsx**: Main page with a button to initiate the checkout process.
- **pages/success.tsx**: Success page displayed after a successful payment.
- **pages/cancel.tsx**: Cancel page displayed if the payment is canceled.
- **.env.local**: Environment variables file (should not be committed).

## Usage

### 1. Enable Link in Stripe Dashboard

- Log in to your [Stripe Dashboard](https://dashboard.stripe.com/).
- Navigate to **Settings > Payment methods**.
- Ensure **Link** is enabled for your account.

### 2. Initiate Checkout

- Go to `http://localhost:3011`.
- Click the **Checkout** button.
- You will be redirected to the Stripe Checkout page with **Link** as a payment option.

### 3. Complete or Cancel Payment

- **Complete Payment**: Enter payment details and complete the purchase. You will be redirected to the **Success** page.
- **Cancel Payment**: Click the **Cancel** button during checkout. You will be redirected to the **Cancel** page.

## Subscriptions

- Create new product: https://dashboard.stripe.com/test/products (testing) or https://dashboard.stripe.com/products (live)
- In the Pricing list, click the “…” button and then “Copy price ID”
- Add `STRIPE_PRICE_ID` to `.env.local`

## Customization

### Modify Product Details

To change the product name or price, edit the `line_items` in `create-purchase.ts`:

```typescript
// pages/api/create-purchase.ts

const session = await stripe.checkout.sessions.create({
  // ...
  line_items: [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Your Custom Product',
        },
        unit_amount: 1000, // Amount in cents ($10.00)
      },
      quantity: 1,
    },
  ],
  // ...
});
```

### Update Success and Cancel URLs

If you're deploying to production, update the `success_url` and `cancel_url` in `create-purchase.ts`:

```typescript
const YOUR_DOMAIN = 'https://yourdomain.com';

const session = await stripe.checkout.sessions.create({
  // ...
  success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${YOUR_DOMAIN}/cancel`,
});
```

### Add Additional Payment Methods

You can enable more payment methods by modifying the `payment_method_types` array:

```typescript
const session = await stripe.checkout.sessions.create({
  // ...
  payment_method_types: ['card', 'link', 'ideal', 'sepa_debit'],
  // ...
});
```

## Additional Resources

- **Stripe Documentation**
  - [Stripe Checkout](https://stripe.com/docs/payments/checkout)
  - [Stripe Link](https://stripe.com/payments/link)
