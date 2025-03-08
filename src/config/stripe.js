import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with the publishable key
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Stripe test card numbers for different scenarios
export const testCards = {
  success: '4242 4242 4242 4242',
  decline: '4000 0000 0000 0002',
  requireAuth: '4000 0025 0000 3155',
  // Test card expiry: Any future date
  // Test CVC: Any 3 digits
  // Test postal code: Any 5 digits
};

// Function to format amount for Stripe (converts dollars to cents)
export const formatAmountForStripe = (amount) => {
  return Math.round(amount * 100);
};
