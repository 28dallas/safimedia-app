import React from 'react';

const SubscriptionPlans = () => {
  const plans = [
    {
      id: 1,
      title: "Starter",
      price: "$12/month",
      description: "For individuals just getting started",
      features: [
        "Basic logo or brand design",
        "1 social media account setup",
        "Social media advertising management",
        "4 content posts/month (images or carousels)"
      ]
    },
    {
      id: 2,
      title: "Professional",
      price: "$39/month",
      description: "For small teams and growing businesses",
      features: [
        "Full brand identity kit (logo, color palette, typography)",
        "3 social media accounts managed",
        "12 high-quality content posts/month (images, reels, or carousels)"
      ],
      popular: true
    },
    {
      id: 3,
      title: "Enterprise",
      price: "$79/month",
      description: "For large organizations and corporations",
      features: [
        "Comprehensive brand strategy development",
        "Full-service management for up to 5 social media accounts",
        "Dedicated account manager & weekly strategy sessions"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Subscription Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a plan that fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="card p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.title}</h3>
              <span className="text-2xl font-bold text-blue-600">{plan.price}</span>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="list-disc list-inside mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 px-4 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
