import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardDocumentListIcon, ClockIcon, CheckIcon, ShieldCheckIcon, UserGroupIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

export default function Consultation() {
  const navigate = useNavigate();

  const handleBookConsultation = (type) => {
    const orderNumber = `DCVBS-${Date.now().toString(36).toUpperCase()}`;
    const consultationData = {
      name: type.name,
      duration: type.duration,
      price: type.price,
      features: type.features,
      description: type.description
    };
    
    navigate('/consultation/details', { 
      state: { 
        consultationType: consultationData,
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
      description: 'Initial project assessment for veterans and homeowners',
      icon: <BuildingOffice2Icon className="h-12 w-12 text-primary mx-auto mb-4" />,
      features: [
        'On-site evaluation by veteran contractors',
        'Initial project scope discussion',
        'Rough cost estimation',
        'Basic feasibility assessment',
        'VA loan compatibility check'
      ]
    },
    {
      id: 'detailed',
      name: 'Detailed Project Review',
      price: 299,
      duration: '2 hours',
      description: 'Comprehensive planning with veteran expertise',
      icon: <ShieldCheckIcon className="h-12 w-12 text-primary mx-auto mb-4" />,
      features: [
        'Detailed site evaluation by senior veteran contractors',
        'In-depth project scope analysis',
        'Detailed cost breakdown',
        'VA funding assessment',
        'Material recommendations with veteran-trusted suppliers',
        'Timeline planning with military precision',
        'ADA compliance review if needed',
        'Priority follow-up support'
      ]
    },
    {
      id: 'full',
      name: 'Full Design Review',
      price: 499,
      duration: '3 hours',
      description: 'Complete veteran-led project design and planning',
      icon: <UserGroupIcon className="h-12 w-12 text-primary mx-auto mb-4" />,
      features: [
        'Complete site evaluation by our veteran team',
        'Full project scope with veteran expertise',
        'Comprehensive cost analysis',
        'VA loan maximization strategies',
        'Veteran-preferred material selections',
        'Military-grade project timeline',
        'Full architectural consultation',
        '3D visualization concepts',
        'Permit and zoning review',
        'Dedicated veteran project manager',
        'Lifetime support from our veteran team'
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
            Choose your preferred consultation type. Our veteran-led team brings military precision and expertise to every project consultation.
          </p>

          {/* Consultation Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {consultationTypes.map((type) => (
              <div 
                key={type.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6 border-b border-gray-200">
                  {type.icon}
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

          {/* Why Choose Us */}
          <div className="mt-20">
            <div className="flex items-center justify-center mb-8">
              <ShieldCheckIcon className="h-8 w-8 text-primary mr-3" />
              <h2 className="heading-2">Why Choose Our Veteran-Led Team</h2>
            </div>
            <p className="text-xl text-gray-600 text-center mb-12">
              Our team of veteran contractors brings military precision, leadership, and expertise to every construction project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <BuildingOffice2Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Veteran Expertise</h3>
                <p className="text-gray-600">
                  Our team of veteran contractors brings years of military discipline and construction expertise to your project.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <ShieldCheckIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">VA Loan Knowledge</h3>
                <p className="text-gray-600">
                  Expert guidance on VA loan requirements and maximizing your benefits for home improvements.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <UserGroupIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Military Precision</h3>
                <p className="text-gray-600">
                  We apply military-grade attention to detail and project management to every consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
