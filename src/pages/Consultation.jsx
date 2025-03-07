import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Calendar from 'react-calendar';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardDocumentListIcon, CurrencyDollarIcon, ClockIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from '@heroicons/react/24/outline';
import 'react-calendar/dist/Calendar.css';
import classNames from 'classnames';

// Custom calendar styles
import './Calendar.css';

export default function Consultation() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { register, handleSubmit, formState: { errors } } = useForm();

  const consultationTypes = [
    {
      id: 'basic',
      name: 'Basic Assessment',
      price: 149,
      duration: '1 hour',
      description: 'Initial project assessment and rough estimation',
      includes: [
        'Site visit and basic measurements',
        'Preliminary project scope discussion',
        'Rough cost estimation',
        'Basic feasibility assessment'
      ]
    },
    {
      id: 'detailed',
      name: 'Detailed Scope Review',
      price: 299,
      duration: '2 hours',
      description: 'Comprehensive project planning and detailed estimation',
      includes: [
        'Detailed measurements and site analysis',
        'In-depth project requirements review',
        'Detailed cost breakdown',
        'Timeline planning',
        'Material recommendations'
      ]
    },
    {
      id: 'full',
      name: 'Full Design Consultation',
      price: 499,
      duration: '3 hours',
      description: 'Complete project design and planning service',
      includes: [
        'Complete site analysis and measurements',
        'Full project design consultation',
        '3D visualization concepts',
        'Detailed material selection',
        'Comprehensive project plan',
        'Permit requirement review'
      ]
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const onSubmit = (data) => {
    console.log('Form submitted:', { ...data, selectedDate });
    // Here we would typically handle the form submission
    // and payment processing with Stripe
  };

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
            Book a Consultation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Take the first step towards your construction project with a
            professional consultation from our expert team.
          </motion.p>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section">
        <div className="container max-w-7xl">
          {/* Progress Steps */}
          <div className="flex justify-center gap-4 mb-6">
            {[1, 2, 3].map((number) => (
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
                  {number === 1 ? 'Select Package' : number === 2 ? 'Choose Time' : 'Payment'}
                </span>
                {number < 3 && (
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
                Select Your Consultation Package
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
                    onClick={() => setStep(2)}
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
                        {type.includes.map((item, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-center text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                          >
                            <CheckIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                            <span>{item}</span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        onClick={() => setStep(3)}
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
                Complete Your Booking
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary py-3 flex items-center justify-center space-x-2 group"
                >
                  <span>Complete Booking</span>
                  <ChevronRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 px-8">
            {step > 1 && (
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
