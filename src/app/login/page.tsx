"use client";

import Image from "next/image";
import { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login data:", formData);
    };

    return (
        <div className="w-full h-screen flex">
            {/* Left Side */}
            <div className="flex-1 bg-white flex flex-col justify-center px-16">
                {/* Logo */}
                <div className="mb-10">
                    <Image
                        src="/gritly.png"
                        alt="Gritly Logo"
                        width={150}
                        height={40}
                        className="object-contain"
                    />
                </div>

                {/* Header */}
                <h2 className="text-4xl font-bold text-black mb-2">Login</h2>
                <h3 className="text-xl text-black font-medium mb-2">Welcome back</h3>
                <p className="text-gray-600 mb-8">
                    Log in with your credentials to get instant access to our large book
                    collection.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A4312] focus:border-[#0A4312] outline-none"
                        />
                    </div>

                    <div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A4312] focus:border-[#0A4312] outline-none"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center">
                            <input
                                id="rememberMe"
                                name="rememberMe"
                                type="checkbox"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                className="h-4 w-4 text-[#0A4312] focus:ring-[#0A4312] border-gray-300 rounded"
                            />
                            <span className="ml-2 text-gray-700">Remember password</span>
                        </label>
                        <a href="#" className="text-[#0A4312] hover:underline">
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
                    Don’t have an account?{" "}
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
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="justify-center">

                    <Image
                        src="/frame.png"
                        alt="Typing illustration"
                        width={392}
                        height={366}
                        className="object-contain"
                    />
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-10 left-10">
                    <p className="text-2xl text-[#0A4312] font-semibold">
                        Your <span className="italic font-normal">Journey</span><br />
                        <span className="text-2xl text-[#0A4312] font-semibold">begins here</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
