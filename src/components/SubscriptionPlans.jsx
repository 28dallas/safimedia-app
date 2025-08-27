import React from 'react';

const SubscriptionPlans = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Professional Membership Plans</h2>
        <p className="text-center mb-12">Choose the plan that fits your business needs and start connecting with clients today.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-2xl font-bold my-4">$29/month</p>
            <p>Perfect for new professionals</p>
            <ul className="my-4">
              <li>✔ Basic profile creation</li>
              <li>✔ Up to 10 portfolio images</li>
              <li>✔ Client inquiry management</li>
              <li>✔ Basic analytics</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</button>
          </div>

          <div className="border rounded-lg p-6 text-center bg-gray-100">
            <h3 className="text-xl font-semibold">Professional</h3>
            <p className="text-2xl font-bold my-4">$79/month</p>
            <p>Best for growing businesses</p>
            <ul className="my-4">
              <li>✔ Everything in Starter</li>
              <li>✔ Unlimited portfolio images</li>
              <li>✔ Premium listing placement</li>
              <li>✔ Instant quote generation</li>
              <li>✔ Calendar integration</li>
              <li>✔ WhatsApp integration</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Start Free Trial</button>
          </div>

          <div className="border rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-2xl font-bold my-4">$199/month</p>
            <p>For established agencies</p>
            <ul className="my-4">
              <li>✔ Everything in Professional</li>
              <li>✔ Multi-user team accounts</li>
              <li>✔ Advanced analytics & reporting</li>
              <li>✔ Priority customer support</li>
              <li>✔ Custom branding options</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
