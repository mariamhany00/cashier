import React from 'react';
import Header from '../../Header/Header';
import Cards from '../../Cards/Cards';

export default function First() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />

      <div className="p-6">
        <h2 className="text-3xl font-bold text-[#246FA8] text-center mb-6">Welcome to First Page</h2>

        <Cards />

        <div className="mt-8 text-gray-700 text-center">
          <p>This is the content of your first page with the custom header and sidebar.</p>
        </div>
      </div>
    </div>
  );
}
