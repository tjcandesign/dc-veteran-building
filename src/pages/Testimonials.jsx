import { StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      project: "Kitchen Renovation",
      location: "Washington DC",
      rating: 5,
      content: "DC Veteran Building Services transformed our outdated kitchen into a modern masterpiece. Their attention to detail and communication throughout the project was exceptional. The team's military precision was evident in every aspect of the work."
    },
    {
      id: 2,
      name: "Michael Chen",
      project: "Commercial Office Build-Out",
      location: "Arlington, VA",
      rating: 5,
      content: "As a business owner, I appreciated their disciplined approach to our office renovation. They stayed on schedule, within budget, and the quality of work exceeded our expectations. Their veteran-led team brings a level of professionalism that's hard to find."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      project: "Custom Home Build",
      location: "Bethesda, MD",
      rating: 5,
      content: "Building our dream home with DC Veteran Building Services was an incredible experience. Their team guided us through every step, from design to completion. The quality of craftsmanship and attention to detail is outstanding."
    },
    {
      id: 4,
      name: "David Thompson",
      project: "Bathroom Remodel",
      location: "Alexandria, VA",
      rating: 5,
      content: "The team's military background shows in their precision and organization. Our bathroom remodel was completed on time and the results are stunning. Their commitment to excellence is unmatched."
    },
    {
      id: 5,
      name: "Lisa Williams",
      project: "Restaurant Renovation",
      location: "Washington DC",
      rating: 5,
      content: "Our restaurant renovation was a complex project with tight deadlines. The team's military-style project management ensured everything ran smoothly. They were professional, efficient, and delivered exceptional results."
    },
    {
      id: 6,
      name: "Robert Martinez",
      project: "Home Addition",
      location: "Silver Spring, MD",
      rating: 5,
      content: "Adding an extension to our home was a big decision, but DC Veteran Building Services made the process seamless. Their transparent communication and quality workmanship gave us complete confidence throughout the project."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-brown text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl max-w-3xl">
            Don't just take our word for it. Hear what our satisfied clients have to say
            about their experience working with DC Veteran Building Services.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <StarIcon key={index} className="h-5 w-5 text-primary" />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.project}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-xl">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-xl">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5.0</div>
              <p className="text-xl">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the DC Veteran Building Services difference for yourself.
            Contact us today to discuss your project.
          </p>
          <Link
            to="/consultation"
            className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
