"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Hello, ${e.target.name.value}! Welcome to Azure!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Azure Test App
          </h1>
          <p className="text-lg text-gray-600">
            Simple web app for testing Azure hosting
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Counter Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Counter Test</h2>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-4">{count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Click me!
              </button>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Form Test</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Enter your name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>
            </form>
            {message && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
                {message}
              </div>
            )}
          </div>

          {/* Status Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">App Status</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                App is running
              </p>
              <p className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                React state working
              </p>
              <p className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Ready for Azure deployment
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p>Built with Next.js - Ready for Azure</p>
        </footer>
      </div>
    </div>
  );
}
