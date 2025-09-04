'use client';

import { useState } from 'react';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signup data:', formData);
    };

    return (
        <div className="w-full h-screen bg-white flex">
            {/* Left Side - Image and Text */}
            <div className="w-[672px] h-full bg-[#F4F8F5] relative flex items-center justify-center">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 opacity-20"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start px-16">
                    {/* Logo */}
                    <div className="mb-16">
                        <div className="w-52 h-4 bg-gradient-to-r from-green-600 to-green-800 rounded"></div>
                    </div>

                    {/* Main Text */}
                    <div className="max-w-[713px]">
                        <h1 className="text-[32px] font-bold leading-[39px] text-[#0A4312] mb-20 font-['Montserrat']">
                            Learning a new skill has never been better and easier, Thanks to Gritly resources
                        </h1>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 h-full bg-white rounded-l-[8px] relative">
                {/* Form Container */}
                <div className="absolute left-[100px] top-[61px] w-[532px] h-[860px]">
                    {/* Header */}
                    <div className="mb-[67px]">
                        <h2 className="text-[48px] font-bold leading-[59px] text-black mb-4 font-['Montserrat']">
                            Create your account
                        </h2>
                        <p className="text-[18px] font-medium leading-[22px] text-[#7B817C] font-['Montserrat']">
                            Signup now and unlock exclusive access
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-[45px]">
                        {/* Name Field */}
                        <div>
                            <label className="block text-[24px] font-medium leading-[29px] text-black mb-2 font-['Montserrat']">
                                Name*
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full h-[48px] border border-[#D4D9D5] rounded-[8px] px-[27px] py-[13px] text-[16px] font-normal leading-[20px] text-[#B4B2B2] font-['Montserrat'] focus:outline-none focus:border-[#0A4312] focus:text-black"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-[24px] font-medium leading-[29px] text-black mb-2 font-['Montserrat']">
                                Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full h-[48px] border border-[#D4D9D5] rounded-[8px] px-[27px] py-[13px] text-[16px] font-normal leading-[20px] text-[#B4B2B2] font-['Montserrat'] focus:outline-none focus:border-[#0A4312] focus:text-black"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-[24px] font-medium leading-[29px] text-black mb-2 font-['Montserrat']">
                                Password*
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                className="w-full h-[48px] border border-[#D4D9D5] rounded-[8px] px-[27px] py-[13px] text-[16px] font-normal leading-[20px] text-[#B4B2B2] font-['Montserrat'] focus:outline-none focus:border-[#0A4312] focus:text-black"
                                required
                            />
                            <p className="text-[18px] font-normal leading-[22px] text-black/60 mt-1 font-['Montserrat']">
                                Must be at least 8 characters.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-6">
                            {/* Get Started Button */}
                            <button
                                type="submit"
                                className="w-full h-[48px] bg-[#0A4312] bg-opacity-80 rounded-[8px] text-white text-[16px] font-semibold leading-[20px] font-['Montserrat'] hover:bg-opacity-100 transition-all duration-200"
                            >
                                Get Started
                            </button>

                            {/* Google Sign Up Button */}
                            <button
                                type="button"
                                className="w-full h-[48px] bg-white bg-opacity-80 border border-[#D4D9D5] rounded-[8px] text-black text-[16px] font-medium leading-[20px] font-['Montserrat'] hover:bg-opacity-100 transition-all duration-200 relative"
                            >
                                Sign up with Google
                                {/* Google Logo Placeholder */}
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-xs font-bold text-gray-600">G</span>
                                </div>
                            </button>
                        </div>

                        {/* Sign In Link */}
                        <div className="flex justify-center">
                            <p className="text-[18px] font-normal leading-[22px] text-[#7B7676] font-['Montserrat']">
                                Already have an account?{' '}
                                <a href="/login" className="text-[#0A4312] hover:underline font-medium">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
