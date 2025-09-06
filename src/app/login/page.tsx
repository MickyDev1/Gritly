'use client';

import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data:', formData);
  };

  return (
    <div className="relative w-full h-screen flex overflow-hidden">
      {/* Left Side */}
      <div className="relative w-1/2 h-full bg-white flex flex-col justify-center px-16 z-10">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-2xl font-extrabold text-[#0A4312] tracking-widest">GRITLY</h1>
        </div>

        {/* Text */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-black mb-2">Login</h2>
          <h3 className="text-xl text-black mb-2">Welcome back</h3>
          <p className="text-gray-600">
            Log in with your credentials to get instant access to our large book collection.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A4312] focus:border-[#0A4312] outline-none"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A4312] focus:border-[#0A4312] outline-none"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-[#0A4312] focus:ring-[#0A4312] border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Remember password</span>
            </label>
            <a href="#" className="text-sm text-[#0A4312] hover:underline">
              Forgot password
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#0A4312] text-white rounded-md font-medium hover:bg-green-900 transition"
          >
            Sign in
          </button>
        </form>

        {/* Sign up link */}
        <p className="text-sm text-gray-700 mt-10">
          Don’t have an account?{' '}
          <a href="/signup" className="text-[#0A4312] font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {/* Right Side */}
      <div
        className="w-1/2 h-full relative flex flex-col justify-center items-center"
        style={{
          backgroundImage: 'url("/loginbackground.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Continue Learning box */}
        <div className="bg-white/70 rounded-lg px-10 py-6 mb-12 text-center">
          <h2 className="text-5xl font-extrabold text-[#0A4312] leading-tight">
            Continue <br /> Learning
          </h2>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-10 left-10">
          <p className="text-2xl text-[#0A4312] font-semibold">
            Your Journey <br />
            <span className="italic font-normal">begins here</span>
          </p>
        </div>
      </div>
    </div>
  );
}
import Image from "next/image";