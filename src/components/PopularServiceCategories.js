import React from 'react';

const PopularServiceCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Wedding Planning",
      professionals: 245,
      icon: "💍"
    },
    {
      id: 2,
      title: "Corporate Events",
      professionals: 189,
      icon: "🏢"
    },
    {
      id: 3,
      title: "Party Planning",
      professionals: 156,
      icon: "🎉"
    },
    {
      id: 4,
      title: "Photography",
      professionals: 120,
      icon: "📸"
    },
    {
      id: 5,
      title: "Catering",
      professionals: 200,
      icon: "🍽️"
    },
    {
      id: 6,
      title: "Entertainment",
      professionals: 300,
      icon: "🎭"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Service Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="card p-6 border rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.professionals} professionals</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServiceCategories;
