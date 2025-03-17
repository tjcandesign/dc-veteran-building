import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardDocumentListIcon, ClockIcon, CheckIcon, CalculatorIcon } from '@heroicons/react/24/outline';

export default function Consultation() {
  const [projectCost, setProjectCost] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(10);
  const interestRate = 6.99;
  const navigate = useNavigate();

  const calculateMonthlyPayment = () => {
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const p = projectCost;
    
    if (!p || p <= 0) return '0';
    
    const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleBookConsultation = (type) => {
    const orderNumber = `DCVBS-${Date.now().toString(36).toUpperCase()}`;
    navigate('/consultation/details', { 
      state: { 
        consultationType: type,
        orderNumber: orderNumber
      } 
    });
  };

  const consultationTypes = [
    {
      id: 'basic',
      name: 'Basic Project Review',
      price: 149,
      duration: '1 hour',
      description: 'Initial project assessment and rough estimation',
      features: [
        'Basic site visit and measurements',
        'Initial project scope discussion',
        'Rough cost estimation',
        'Basic feasibility assessment'
      ]
    },
    {
      id: 'detailed',
      name: 'Detailed Project Review',
      price: 299,
      duration: '2 hours',
      description: 'Comprehensive project planning and detailed estimation',
      features: [
        'Detailed site visit and measurements',
        'In-depth project scope discussion',
        'Detailed cost estimation',
        'Comprehensive feasibility assessment',
        'Material recommendations',
        'Timeline planning',
        'Basic design consultation',
        'Follow-up support'
      ]
    },
    {
      id: 'full',
      name: 'Full Design Review',
      price: 499,
      duration: '3 hours',
      description: 'Complete project design and planning service',
      features: [
        'Complete site visit and measurements',
        'Full project scope discussion',
        'Comprehensive cost estimation',
        'In-depth feasibility assessment',
        'Detailed material recommendations',
        'Comprehensive timeline planning',
        'Full design consultation',
        'Visualization concepts',
        'Permit requirement review',
        'Priority follow-up support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream py-20">
      <div className="w-full px-4 xl:px-24 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <ClipboardDocumentListIcon className="h-8 w-8 text-primary mr-3" />
            <h2 className="heading-2">Schedule Your Consultation</h2>
          </div>
          <p className="text-xl text-gray-600 text-center mb-12">
            Choose your preferred consultation type. Our team will guide you through your project requirements and provide expert recommendations.
          </p>

          {/* Consultation Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {consultationTypes.map((type) => (
              <div 
                key={type.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <ClockIcon className="h-5 w-5 mr-2" />
                      {type.duration}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      ${type.price}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleBookConsultation(type)}
                    className="w-full mt-6 btn-primary inline-flex items-center justify-center group text-lg"
                  >
                    Book {type.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Financing Calculator */}
          <div className="mt-20">
            <div className="flex items-center justify-center mb-8">
              <CalculatorIcon className="h-8 w-8 text-primary mr-3" />
              <h2 className="heading-2">Estimate Your Monthly Payments</h2>
            </div>
            <p className="text-xl text-gray-600 text-center mb-12">
              Use our calculator to estimate monthly payments for your construction project.
              Actual rates and terms may vary based on credit approval and other factors.
            </p>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Project Cost</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      min="5000"
                      max="1000000"
                      step="1000"
                      value={projectCost}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      onChange={(e) => setProjectCost(Number(e.target.value))}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Loan Term (Years)</label>
                  <select
                    value={loanTerm}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                  >
                    <option value="5">5 Years</option>
                    <option value="10">10 Years</option>
                    <option value="15">15 Years</option>
                    <option value="20">20 Years</option>
                  </select>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Estimated Monthly Payment
                </h3>
                <p className="text-4xl font-bold text-primary">
                  ${calculateMonthlyPayment()}
                </p>
                <p className="text-gray-500 mt-2">
                  *Estimate based on {interestRate}% APR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}          </div>
          <p className="text-xl text-gray-600 text-center mb-12">
            Choose your preferred consultation type. Our team will guide you through your project requirements and provide expert recommendations.
          </p>

          {/* Consultation Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {consultationTypes.map((type) => (
              <div 
                key={type.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <ClockIcon className="h-5 w-5 mr-2" />
                      {type.duration}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      ${type.price}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleBookConsultation(type)}
                    className="w-full mt-6 btn-primary inline-flex items-center justify-center group text-lg"
                  >
                    Book {type.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
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
