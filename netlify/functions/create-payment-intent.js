// Initialize Stripe
let stripe;
try {
  // Debug environment variables
  console.log('Environment variables:', {
    nodeEnv: process.env.NODE_ENV,
    hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
    stripeKeyLength: process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY.length : 0
  });

  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not configured');
  }

  if (!process.env.STRIPE_SECRET_KEY.startsWith('sk_')) {
    throw new Error('Invalid STRIPE_SECRET_KEY format');
  }

  stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  
  // Verify Stripe connection
  console.log('Verifying Stripe connection...');
  stripe.paymentMethods.list({ limit: 1 }).then(() => {
    console.log('Stripe connection verified successfully');
  }).catch((error) => {
    console.error('Stripe connection verification failed:', error);
  });

  console.log('Stripe initialized successfully');
} catch (error) {
  console.error('Failed to initialize Stripe:', error);
  throw error;
}

exports.handler = async function(event, context) {
  console.log('Received payment intent request');

  // Validate HTTP method
  if (event.httpMethod !== 'POST') {
    console.warn('Invalid HTTP method:', event.httpMethod);
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse and validate request body
    let amount, consultationType;
    try {
      ({ amount, consultationType } = JSON.parse(event.body));
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid request body format' })
      };
    }

    // Validate input
    if (!amount || !consultationType) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: amount and consultationType' })
      };
    }

    if (typeof amount !== 'number' || amount <= 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid amount' })
      };
    }

    console.log('Creating payment intent:', { amount, consultationType });
    
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        consultationType,
        environment: process.env.NODE_ENV || 'development'
      }
    });

    console.log('Payment intent created successfully:', { 
      id: paymentIntent.id,
      amount: paymentIntent.amount,
      status: paymentIntent.status
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret
      })
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    
    // Handle specific Stripe errors
    if (error.type === 'StripeCardError') {
      return {
        statusCode: 402,
        body: JSON.stringify({ error: error.message })
      };
    }

    if (error.type === 'StripeInvalidRequestError') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid request to payment service' })
      };
    }

    // Generic error
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'An error occurred while processing your payment',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    };
  }
};
