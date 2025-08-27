import React from 'react';
import SubscriptionPlans from './SubscriptionPlans';
import HowEventConnectWorks from './HowEventConnectWorks';
import RecentEventRequests from './RecentEventRequests';
import PopularServiceCategories from './PopularServiceCategories';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Event Photographers",
      description: "Capture every precious moment with professional photography",
      professionals: 450,
      startingPrice: "$299",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Event Planners",
      description: "Expert coordination for seamless event execution",
      professionals: 320,
      startingPrice: "$599",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Catering Services",
      description: "Delicious cuisine tailored to your event needs",
      professionals: 280,
      startingPrice: "$25/person",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Venue Coordinators",
      description: "Perfect venues for every occasion and budget",
      professionals: 180,
      startingPrice: "$199",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Event Decorators",
      description: "Transform spaces with stunning decorative designs",
      professionals: 220,
      startingPrice: "$399",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover top-rated professionals across all event categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card p-6 group cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{service.professionals} professionals</span>
                <span className="font-semibold text-blue-600">Starting at {service.startingPrice}</span>
              </div>
              
              <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 px-4 rounded-lg transition-colors">
                View Professionals
              </button>
            </div>
          ))}

          {/* View All Services Card */}
          <div className="card p-6 flex flex-col items-center justify-center text-center group cursor-pointer border-2 border-dashed border-gray-300 hover:border-blue-400">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">View All Services</h3>
            <p className="text-gray-600">Explore more professional categories</p>
          </div>
        </div>
      </div>
      <PopularServiceCategories />
      <HowEventConnectWorks />
      <RecentEventRequests />
    </section>
  );
};

export default ServicesSection;

