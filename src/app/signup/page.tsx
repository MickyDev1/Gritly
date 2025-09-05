"use client";

import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full h-screen bg-white flex">
      {/* Left Side */}
          <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-black mb-2">
            Create your account
          </h2>
          <p className="text-gray-500 mb-8">
            Signup now and unlock exclusive access
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
{/* Name */}
<div>
    <label
        htmlFor="name"
        className="block text-base font-medium text-gray-700 mb-2"
    >
        Name
    </label>
    <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
        required
    />
</div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* CTA button */}
            <button
              type="submit"
              className="w-full h-12 bg-[#0A4312] rounded-md text-white font-medium hover:bg-green-900 transition"
            >
              Get Started
            </button>

            {/* Google button */}
            <button
              type="button"
              className="w-full h-12 border border-gray-300 rounded-md flex items-center justify-center gap-3"
            >
              <img src="google-logo.png" alt="Google" className="w-5 h-5" />
              <span>Sign up with Google</span>
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#0A4312] font-medium hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
      {/* Right Side */}
<div className="flex-1 bg-[#F4F8F5] flex items-center justify-center px-10">
        <div className="max-w-md">
          <h1 className="text-3xl font-semibold text-[#0A4312] leading-snug">
            Learning a new skill has never been better and easier, Thanks to
            Gritly resources
          </h1>
        </div>
      </div>
    </div>
  );
}
