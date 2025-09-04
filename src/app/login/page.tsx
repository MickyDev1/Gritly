'use client';

import { useState } from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login data:', formData);
    };

    return (
        <div className="w-full h-screen bg-white relative">
            {/* Left Side - Form */}
            <div className="absolute left-[84px] top-[190px] w-[563px] h-[307px]">
                {/* Header Section */}
                <div className="mb-[13px]">
                    <div className="mb-[6px]">
                        <h1 className="text-[36px] font-semibold leading-[44px] text-black font-['Montserrat'] mb-[18px]">
                            Login
                        </h1>
                        <h2 className="text-[32px] font-normal leading-[39px] text-black font-['Montserrat']">
                            Welcome back
                        </h2>
                    </div>

                    <div className="w-[563px] h-[64px] flex items-center justify-center">
                        <p className="text-[18px] font-normal leading-[22px] text-[#7B817C] font-['Montserrat'] text-center">
                            Log in with your credentials to get instant access to our large book collection.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-[531px] space-y-[15px]">
                    {/* Email Field */}
                    <div className="space-y-[16px]">
                        <label className="block text-[18px] font-medium leading-[22px] text-black font-['Inter']">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="w-full h-[48px] border border-[#C3C1C1] rounded-[8px] px-[27px] py-[13px] text-[16px] font-normal leading-[19px] text-[#B4B2B2] font-['Inter'] focus:outline-none focus:border-[#0A4312] focus:text-black"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="space-y-[16px] relative">
                        <label className="block text-[18px] font-medium leading-[22px] text-black font-['Inter'] opacity-80">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full h-[48px] border border-[#C3C1C1] rounded-[8px] px-[25px] py-[14px] text-[16px] font-normal leading-[19px] text-[#B4B2B2] font-['Inter'] focus:outline-none focus:border-[#0A4312] focus:text-black opacity-80"
                            required
                        />
                        {/* Eye Icon */}
                        <div className="absolute right-[15px] top-[38px] w-[25px] h-[25px] flex items-center justify-center cursor-pointer">
                            <svg className="w-[12.5px] h-[12.5px]" viewBox="0 0 20 20" fill="none">
                                <path d="M1 10C1 10 4 4 10 4C16 4 19 10 19 10C19 10 16 16 10 16C4 16 1 10 1 10Z" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="10" cy="10" r="3" stroke="#222222" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </div>
                </form>

                {/* Remember Me and Forgot Password */}
                <div className="absolute left-[95px] top-[585px] w-[541px] h-[102px]">
                    <div className="w-[531px] h-[48px] mb-[24px]">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full h-full bg-[#0A4312] bg-opacity-80 rounded-[8px] text-white text-[16px] font-semibold leading-[19px] font-['Inter'] hover:bg-opacity-100 transition-all duration-200"
                        >
                            Sign in
                        </button>
                    </div>

                    <div className="w-[541px] h-[39px] flex justify-between items-center">
                        <div className="flex items-center gap-[9px]">
                            <input
                                id="rememberMe"
                                name="rememberMe"
                                type="checkbox"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                className="w-[24px] h-[24px] border border-[#C3C1C1] rounded-[8px] bg-white"
                            />
                            <label htmlFor="rememberMe" className="text-[16px] font-normal leading-[19px] text-[#5C5B5B] font-['Inter']">
                                Remember password
                            </label>
                        </div>

                        <a href="#" className="text-[16px] font-normal leading-[19px] text-[#05397D] font-['Inter'] underline">
                            Forgot password
                        </a>
                    </div>
                </div>

                {/* Sign Up Link */}
                <div className="absolute left-[185px] top-[847px] flex items-center gap-[4px]">
                    <span className="text-[16px] font-normal leading-[19px] text-black font-['Inter']">
                        Don't have an account?
                    </span>
                    <a href="/signup" className="text-[16px] font-medium leading-[19px] text-[#0A4312] font-['Inter'] underline">
                        Sign up
                    </a>
                </div>
            </div>

            {/* Right Side - Background */}
            <div className="absolute left-[588px] top-0 w-[852px] h-full bg-[#0A4312] relative overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900 opacity-20"></div>

                {/* Logo */}
                <div className="absolute left-[100px] top-[57px] w-[212px] h-[16px] bg-gradient-to-r from-white to-gray-200 rounded"></div>

                {/* Main Content */}
                <div className="absolute left-[896px] top-[252px] w-[392px] h-[366px] flex flex-col items-center">
                    {/* Continue Learning Text */}
                    <div className="w-[392px] h-[196px] flex items-center justify-center mb-[24px]">
                        <h1 className="text-[72px] font-extrabold leading-[88px] tracking-[0.04em] text-[#0A4312] font-['Montserrat'] text-center">
                            Continue<br />Learning
                        </h1>
                    </div>

                    {/* Learning Icons */}
                    <div className="w-[356px] h-[170px] space-y-[24px]">
                        {/* SoloLearn Icon */}
                        <div className="w-full h-[73px] bg-[rgba(139,173,144,0.25)] rounded-[24px] flex items-center justify-center relative">
                            <div className="w-[55px] h-[55px] bg-[#0A4312] rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 10-.788-1.84L7.667 9.088l1.94.831a1 1 0 001.07-.04l4-2a1 1 0 10-.788-1.84L10.667 9.088l1.94.831a1 1 0 001.07-.04l4-2a1 1 0 10-.788-1.84l-7-3z" />
                                </svg>
                            </div>
                        </div>

                        {/* Learning Icon */}
                        <div className="w-full h-[73px] bg-[rgba(139,173,144,0.25)] rounded-[24px] flex items-center justify-center relative">
                            <div className="w-[65px] h-[65px] relative">
                                <svg className="w-full h-full text-[#0A4312]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="absolute left-[calc(50%-238px/2+50px)] top-[919px] w-[238px] h-[101px] flex items-center justify-center">
                    <p className="text-[32px] font-semibold leading-[39px] text-[#0A4312] font-['Inter'] text-center">
                        Your Journey begins here
                    </p>
                </div>
            </div>
        </div>
    );
}
