import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY as string,
  {
    apiVersion: "2024-04-10",
    appInfo: {
      name: 'Ignews',
      version: '0.1.0'
    }
  }
);

