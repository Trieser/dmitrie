import React from 'react';

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-blue-500 text-white p-8 rounded-lg shadow-lg text-center'>
        <h1 className='text-3xl font-bold mb-4'>Tailwind CSS Test</h1>
        <p className='mb-2'>
          If you see this blue box with white text, Tailwind is working! 🎉
        </p>
        <button className='mt-4 px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition'>
          Test Button
        </button>
      </div>
    </div>
  );
}
