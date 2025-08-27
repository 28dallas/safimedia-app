import React from 'react';

const RecentEventRequests = () => {
  const requests = [
    {
      id: 1,
      title: "Garden Wedding - 150 guests",
      description: "Looking for a wedding planner for our outdoor ceremony in Napa Valley.",
      budget: "$15,000 - $20,000",
      location: "Napa Valley, CA",
    },
    {
      id: 2,
      title: "Annual Company Retreat",
      description: "Seeking event coordinator for 3-day retreat.",
      budget: "Varies",
      location: "San Francisco, CA",
    },
    // Add more requests as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Event Requests
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what clients are looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {requests.map((request) => (
            <div key={request.id} className="card p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{request.title}</h3>
              <p className="text-gray-600 mb-2">{request.description}</p>
              <p className="text-gray-500">Budget: {request.budget}</p>
              <p className="text-gray-500">Location: {request.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEventRequests;
