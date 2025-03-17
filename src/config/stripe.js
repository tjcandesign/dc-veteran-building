import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with the publishable key
const initializeStripe = () => {
  const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
  if (!key) {
    console.error('Stripe publishable key is missing');
    throw new Error('Stripe configuration error');
  }
  console.log('Initializing Stripe...');
  return loadStripe(key);
};

export const stripePromise = initializeStripe();

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
  if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
    console.error('Invalid amount for Stripe:', amount);
    throw new Error('Invalid payment amount');
  }
  const amountInCents = Math.round(amount * 100);
  console.log('Formatted amount for Stripe:', { dollars: amount, cents: amountInCents });
  return amountInCents;
};
