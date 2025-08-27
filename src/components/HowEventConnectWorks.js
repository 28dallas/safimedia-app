import React from 'react';

const HowEventConnectWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How EventConnect Pro Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to find and book the perfect event professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">1</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Post Your Event</h3>
            <p className="text-gray-600">Describe your event requirements, budget, and preferences.</p>
          </div>
          <div className="card p-6 border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">2</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse & Connect</h3>
            <p className="text-gray-600">Review professional profiles and connect directly with professionals.</p>
          </div>
          <div className="card p-6 border rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">3</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Book & Celebrate</h3>
            <p className="text-gray-600">Finalize details and enjoy your event while we handle the rest.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowEventConnectWorks;
