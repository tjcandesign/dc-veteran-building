import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { EnvelopeIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

export default function ConsultationDetails() {
  const location = useLocation();
  const { consultationType, orderNumber } = location.state || {};

  if (!consultationType || !orderNumber) {
    return <Navigate to="/consultation" replace />;
  }

  const emailSubject = `Consultation Request - ${orderNumber}`;
  const emailBody = `Hello,

I would like to book a ${consultationType.name} consultation.

Order Details:
- Order Number: ${orderNumber}
- Consultation Type: ${consultationType.name}
- Duration: ${consultationType.duration}
- Price: $${consultationType.price}

Please contact me to schedule the consultation.

Thank you!`;

  const encodedSubject = encodeURIComponent(emailSubject);
  const encodedBody = encodeURIComponent(emailBody);
  const mailtoLink = `mailto:info@dcvbs.com?subject=${encodedSubject}&body=${encodedBody}`;

  return (
    <div className="min-h-screen bg-cream py-20">
      <div className="w-full px-4 xl:px-24 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <ClipboardDocumentCheckIcon className="h-8 w-8 text-primary mr-3" />
            <h2 className="heading-2">Consultation Details</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold">Order Number:</span>
                  <span className="ml-2 text-gray-700">{orderNumber}</span>
                </div>
                <div>
                  <span className="font-semibold">Consultation Type:</span>
                  <span className="ml-2 text-gray-700">{consultationType.name}</span>
                </div>
                <div>
                  <span className="font-semibold">Duration:</span>
                  <span className="ml-2 text-gray-700">{consultationType.duration}</span>
                </div>
                <div>
                  <span className="font-semibold">Price:</span>
                  <span className="ml-2 text-gray-700">${consultationType.price}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h3>
              <p className="text-gray-600 mb-6">
                Please click the button below to send us an email with your consultation request. 
                We will contact you within 24 hours to schedule your consultation.
              </p>
              
              <a 
                href={mailtoLink}
                className="w-full btn-primary inline-flex items-center justify-center group text-lg"
              >
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                Send Consultation Request
              </a>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
              <ul className="space-y-2">
                {consultationType.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
