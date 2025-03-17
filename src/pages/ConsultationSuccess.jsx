import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Link, useSearchParams } from 'react-router-dom';
import { updateConsultationPayment } from '../services/consultation';

export default function ConsultationSuccess() {
  const [searchParams] = useSearchParams();
  const paymentIntentId = searchParams.get('payment_intent');
  const consultationId = searchParams.get('consultation_id');

  useEffect(() => {
    if (paymentIntentId && consultationId) {
      updateConsultationPayment(consultationId, paymentIntentId);
    }
  }, [paymentIntentId, consultationId]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
        >
          <CheckCircleIcon className="w-12 h-12 text-green-600" />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for booking a consultation with us. We'll be in touch shortly to confirm your appointment.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </Link>
          <Link
            to="/contact"
            className="block w-full bg-white text-primary border-2 border-primary py-3 px-6 rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
