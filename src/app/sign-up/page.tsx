'use client'
import { LatoMediumText, MontserratMediumText, PoppinsBoldText, PoppinsLightText, PoppinsMediumText } from '@/Style';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        let newErrors: { [key: string]: string } = {};
        if (!formData.username.trim()) newErrors.username = "Username is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted with data:", formData);
        } else {
            console.log("Form has errors:", errors);
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left side - Image */}
            <div className="hidden lg:block lg:w-2/3 relative">
                <Image
                    src="/path-to-your-image.jpg"
                    alt="Fantastical library"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center px-8 bg-gray-900 text-white">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2 flex items-center">
                        <span className="mr-2">
                            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-purple-500">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
                            </svg>
                        </span>
                        JadeScrolls
                    </h1>
                    <PoppinsBoldText>
                        <h2 className="text-2xl font-semibold text-center">Create an account</h2>
                    </PoppinsBoldText>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <PoppinsLightText>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium">User Name</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter Your User Name"
                            />
                            {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username}</p>}
                        </div>

                        <div className='mt-4'>
                            <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter Email Address"
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>

                        <div className='mt-4'>
                            <label htmlFor="password" className="block text-sm font-medium">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter Password"
                            />
                            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                        </div>
                    </PoppinsLightText>
                    <LatoMediumText>
                        <p className="mt-6 text-sm text-gray-400">
                            By creating an account you`re agreeing to our{' '}
                            <Link href="#" className="text-green-400 hover:text-green-300">
                                Terms & Privacy Policy
                            </Link>
                        </p>
                    </LatoMediumText>
                    <div>
                        <PoppinsMediumText>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                                Create an Account
                            </button>
                        </PoppinsMediumText>
                    </div>
                </form>


                <div className="flex justify-center">
                    <MontserratMediumText>
                        <p className="mt-4 text-sm text-center">
                            Already have an account?{' '}
                            <Link href="#" className="text-green-400 hover:text-green-300">
                                Login
                            </Link>
                        </p>
                    </MontserratMediumText>
                </div>
            </div>
        </div >
    );
}
