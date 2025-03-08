import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Calendar from 'react-calendar';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardDocumentListIcon, CurrencyDollarIcon, ClockIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { stripePromise, formatAmountForStripe } from '../config/stripe';
import { createConsultation, updateConsultationPayment } from '../services/consultation';
import 'react-calendar/dist/Calendar.css';
import classNames from 'classnames';

// Custom calendar styles
import './Calendar.css';

// Payment form component
function PaymentForm({ consultationId, amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Starting payment submission');

    if (!stripe || !elements) {
      console.error('Stripe or Elements not initialized');
      return;
    }

    setProcessing(true);
    console.log('Processing payment for consultation:', { consultationId, amount });

    try {
      const { error: submitError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/consultation/success?consultation_id=${consultationId}`,
        },
      });

      if (submitError) {
        console.error('Payment submission error:', submitError);
        setError(submitError.message);
        setProcessing(false);
      } else {
        console.log('Payment submission successful');
      }
    } catch (error) {
      console.error('Unexpected payment error:', error);
      setError('An unexpected error occurred. Please try again.');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement options={{
        layout: 'tabs',
        paymentMethodOrder: ['card'],
        defaultValues: {
          billingDetails: {
            name: '',
            email: ''
          }
        }
      }} />
      {error && <div className="text-red-500 text-sm mt-4 p-3 bg-red-50 rounded-lg">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium disabled:opacity-50 hover:bg-primary/90 transition-colors"
      >
        {processing ? (
          <div className="flex items-center justify-center space-x-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Processing payment...</span>
          </div>
        ) : (
          <span>Pay ${amount}</span>
        )}
      </button>
    </form>
  );
}

export default function Consultation() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [consultationId, setConsultationId] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [paymentError, setPaymentError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const allFeatures = [
    'Site visit and measurements',
    'Project scope discussion',
    'Cost estimation',
    'Feasibility assessment',
    'Material recommendations',
    'Timeline planning',
    'Design consultation',
    'Visualization concepts',
    'Permit requirement review',
    'Follow-up support'
  ];

  const consultationTypes = [
    {
      id: 'basic',
      name: 'Basic Project Review',
      price: 149,
      duration: '1 hour',
      description: 'Initial project assessment and rough estimation',
      features: [
        { text: 'Basic site visit and measurements', included: true },
        { text: 'Initial project scope discussion', included: true },
        { text: 'Rough cost estimation', included: true },
        { text: 'Basic feasibility assessment', included: true },
        { text: 'Material recommendations', included: false },
        { text: 'Timeline planning', included: false },
        { text: 'Design consultation', included: false },
        { text: 'Visualization concepts', included: false },
        { text: 'Permit requirement review', included: false },
        { text: 'Follow-up support', included: false }
      ]
    },
    {
      id: 'detailed',
      name: 'Detailed Project Review',
      price: 299,
      duration: '2 hours',
      description: 'Comprehensive project planning and detailed estimation',
      features: [
        { text: 'Detailed site visit and measurements', included: true },
        { text: 'In-depth project scope discussion', included: true },
        { text: 'Detailed cost estimation', included: true },
        { text: 'Comprehensive feasibility assessment', included: true },
        { text: 'Material recommendations', included: true },
        { text: 'Timeline planning', included: true },
        { text: 'Basic design consultation', included: true },
        { text: 'Visualization concepts', included: false },
        { text: 'Permit requirement review', included: false },
        { text: 'Follow-up support', included: true }
      ]
    },
    {
      id: 'full',
      name: 'Full Design Review',
      price: 499,
      duration: '3 hours',
      description: 'Complete project design and planning service',
      features: [
        { text: 'Complete site visit and measurements', included: true },
        { text: 'Full project scope discussion', included: true },
        { text: 'Comprehensive cost estimation', included: true },
        { text: 'In-depth feasibility assessment', included: true },
        { text: 'Detailed material recommendations', included: true },
        { text: 'Comprehensive timeline planning', included: true },
        { text: 'Full design consultation', included: true },
        { text: 'Visualization concepts', included: true },
        { text: 'Permit requirement review', included: true },
        { text: 'Priority follow-up support', included: true }
      ]
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const createPaymentIntent = async (amountInCents, consultationType) => {
    try {
      console.log('Creating payment intent:', { amountInCents, consultationType });
      
      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amountInCents, consultationType }),
      });

      console.log('Payment intent response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Payment intent error:', errorData);
        throw new Error(errorData.error || 'Failed to create payment intent');
      }

      const data = await response.json();
      console.log('Payment intent created successfully');
      return data.clientSecret;
    } catch (error) {
      console.error('Error creating payment intent:', error);
      setPaymentError(error.message);
      throw error;
    }
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    setSubmitError(null);
    setPaymentError(null);

    try {
      console.log('Starting consultation submission:', {
        type: selectedType?.id,
        price: selectedType?.price,
        date: selectedDate?.toISOString(),
        time: selectedTime,
        customer: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone
        }
      });
      
      // Create consultation record in Firebase
      const consultationData = {
        customer: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone
        },
        consultation: {
          type: selectedType.id,
          price: selectedType.price,
          date: selectedDate.toISOString(),
          time: selectedTime
        },
        projectDescription: data.projectDescription,
        status: 'pending_payment',
        createdAt: new Date().toISOString()
      };

      console.log('Creating consultation record:', consultationData);
      
      // Save to Firebase
      const id = await createConsultation(consultationData);
      console.log('Consultation created with ID:', id);
      setConsultationId(id);

      // Create payment intent
      console.log('Creating payment intent for amount:', selectedType.price);
      const secret = await createPaymentIntent(formatAmountForStripe(selectedType.price), selectedType.id);
      console.log('Payment intent created successfully');
      setClientSecret(secret);

      setStep(4); // Move to payment step
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(
        'There was an error processing your request. Please try again or contact support.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Log component mount and state changes
  useEffect(() => {
    console.log('Consultation component mounted');
    return () => console.log('Consultation component unmounted');
  }, []);

  useEffect(() => {
    if (step) console.log('Step changed:', { step });
  }, [step]);

  useEffect(() => {
    if (selectedType) console.log('Selected consultation type:', selectedType);
  }, [selectedType]);

  useEffect(() => {
    if (clientSecret) console.log('Client secret received');
  }, [clientSecret]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-dark-brown text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Schedule Project Review
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Take the first step towards your construction project with a
            professional project review from our expert team.
          </motion.p>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section">
        <div className="container max-w-7xl">
          {/* Progress Steps */}
          <div className="flex justify-center gap-4 mb-6">
            {[1, 2, 3, 4].map((number) => (
              <div
                key={number}
                className={classNames('flex items-center', {
                  'text-primary': step >= number,
                  'text-gray-400': step < number
                })}
              >
                <div
                  className={classNames('w-6 h-6 rounded-full flex items-center justify-center text-sm', {
                    'bg-primary text-white': step >= number,
                    'bg-gray-200': step < number
                  })}
                >
                  {number}
                </div>
                <span className="ml-1.5 text-sm font-medium">
                  {number === 1 ? 'Select Package' : 
                   number === 2 ? 'Choose Time' : 
                   number === 3 ? 'Details' : 'Payment'}
                </span>
                {number < 4 && (
                  <div className="w-12 h-0.5 mx-2 bg-gray-200">
                    <div
                      className={classNames('h-full bg-primary transition-all', {
                        'w-full': step > number,
                        'w-0': step <= number
                      })}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Select Consultation Type */}
          {step === 1 && (
            <div className="space-y-8 mt-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                Select Your Project Review Package
              </h2>
              <div className="max-w-[1600px] mx-auto px-8">
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-16">
                {consultationTypes.map((type, index) => (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white p-12 rounded-xl shadow-lg border-2 hover:border-primary cursor-pointer transition-all group relative overflow-hidden"
                    onClick={() => {
                      setSelectedType(type);
                      setStep(2);
                    }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative">
                      <h3 className="text-2xl font-bold mb-2">{type.name}</h3>
                      <div className="text-4xl font-bold text-primary mb-6 flex items-baseline">
                        <span className="text-lg mr-1">$</span>
                        {type.price}
                      </div>
                      <div className="flex items-center text-gray-600 mb-6">
                        <ClockIcon className="h-5 w-5 mr-2 text-primary" />
                        <span className="font-medium">{type.duration}</span>
                      </div>
                      <p className="text-gray-600 mb-6">{type.description}</p>
                      <ul className="space-y-3">
                        {type.features.map((feature, index) => (
                          <motion.li 
                            key={index} 
                            className={classNames(
                              'flex items-center',
                              feature.included ? 'text-gray-700' : 'text-gray-400'
                            )}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                          >
                            {feature.included ? (
                              <CheckIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                            ) : (
                              <div className="h-5 w-5 mr-3 flex-shrink-0 text-gray-300 font-bold">×</div>
                            )}
                            <span>{feature.text}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div 
                        className="mt-8 py-3 px-6 bg-primary text-white rounded-lg text-center font-medium group-hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Select Package
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Select Date and Time */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                Select Your Preferred Date and Time
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1600px] mx-auto px-8">
                <div>
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    minDate={new Date()}
                    className="w-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Available Times for {selectedDate.toLocaleDateString()}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {timeSlots.map((time) => (
                      <motion.button
                        key={time}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center space-x-2 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                        onClick={() => {
                          setSelectedTime(time);
                          setStep(3);
                        }}
                      >
                        <ClockIcon className="w-5 h-5" />
                        <span>{time}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Information */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                Your Information
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register('firstName', {
                        required: 'First name is required',
                        minLength: {
                          value: 2,
                          message: 'First name must be at least 2 characters'
                        }
                      })}
                      className={classNames('w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors', {
                        'border-red-500': errors.firstName,
                        'border-gray-200': !errors.firstName
                      })}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register('lastName', {
                        required: 'Last name is required',
                        minLength: {
                          value: 2,
                          message: 'Last name must be at least 2 characters'
                        }
                      })}
                      className={classNames('w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors', {
                        'border-red-500': errors.lastName,
                        'border-gray-200': !errors.lastName
                      })}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={classNames('w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors', {
                      'border-red-500': errors.email,
                      'border-gray-200': !errors.email
                    })}
                    placeholder="john.doe@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[\d\s-+()]*$/,
                        message: 'Invalid phone number'
                      }
                    })}
                    className={classNames('w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors', {
                      'border-red-500': errors.phone,
                      'border-gray-200': !errors.phone
                    })}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Project Description
                  </label>
                  <textarea
                    {...register('projectDescription', {
                      required: 'Project description is required',
                      minLength: {
                        value: 20,
                        message: 'Please provide more details about your project'
                      }
                    })}
                    rows="4"
                    className={classNames('w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors', {
                      'border-red-500': errors.projectDescription,
                      'border-gray-200': !errors.projectDescription
                    })}
                    placeholder="Please describe your project, including any specific requirements or timeline considerations..."
                  ></textarea>
                  {errors.projectDescription && (
                    <p className="mt-1 text-sm text-red-500">{errors.projectDescription.message}</p>
                  )}
                </div>

                <div className="text-sm text-gray-600">
                  By proceeding with the booking, you agree to our terms and conditions.
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{submitting ? 'Processing...' : 'Continue to Payment'}</span>
                  {!submitting && (
                    <ChevronRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  )}
                </motion.button>
                {submitError && (
                  <p className="mt-4 text-red-500 text-sm text-center">{submitError}</p>
                )}
              </form>
            </motion.div>
          )}

          {/* Step 4: Payment */}
          {step === 4 && clientSecret && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                Complete Payment
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                  {import.meta.env.DEV && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4 text-sm">
                      <p className="font-medium mb-2">Test Card Numbers:</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>Success: 4242 4242 4242 4242</li>
                        <li>Decline: 4000 0000 0000 0002</li>
                        <li>Requires Auth: 4000 0025 0000 3155</li>
                        <li>Use any future date, any 3 digits for CVC, and any 5 digits for postal code</li>
                      </ul>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>{selectedType.name}</span>
                    <span className="font-bold">${selectedType.price}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Date</span>
                    <span>{selectedDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Time</span>
                    <span>{selectedTime}</span>
                  </div>
                </div>
                {paymentError ? (
                  <div className="text-red-500 text-center mb-4">{paymentError}</div>
                ) : (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <PaymentForm 
                      consultationId={consultationId} 
                      amount={selectedType.price} 
                    />
                  </Elements>
                )}
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 max-w-[1600px] mx-auto px-8">
            {step > 1 && step !== 4 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(step - 1)}
                className="flex items-center space-x-3 px-6 py-3 bg-white text-gray-700 rounded-lg border-2 border-gray-200 hover:border-primary hover:text-primary transition-all group shadow-md"
              >
                <ChevronLeftIcon className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Previous Step</span>
              </motion.button>
            )}
            {step < 3 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(step + 1)}
                className="flex items-center space-x-3 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all group shadow-md ml-auto"
              >
                <span className="font-medium">Next Step</span>
                <ChevronRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
