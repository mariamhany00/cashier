import React from 'react';

const data = [
  { title: 'Total Orders', value: 120, color: 'bg-[#246FA8]' },
  { title: 'Total Sales', value: '$8,450', color: 'bg-[#09AE94]' },
  { title: 'New Customers', value: 45, color: 'bg-[#C20A0A]' },
  { title: 'Pending Orders', value: 12, color: 'bg-yellow-500' },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {data.map((card, index) => (
        <div
          key={index}
          className={`rounded-xl text-white p-6 shadow-md ${card.color}`}
        >
          <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
          <p className="text-3xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
