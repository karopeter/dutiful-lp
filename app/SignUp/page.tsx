"use client";
import React, { useState } from "react";
import Img from "../reusables/Img";
import Input from "../reusables/Input";
import Link from "next/link";
import Button from "../reusables/Button";
import Tab from "../reusables/Tab";

const SignUpPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'user' | 'provider'>('user');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    reenterPassword: ''
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white p-8">
          <p className="font-circular text-[#686868] text-[16px] font-books mb-2">Sign up for free!</p>
          <h1 className="text-[#1E1E4B] font-recoleta font-semibold text-[24px] md:text-[36px] mb-8">Get started</h1>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Tab
              icon={<Img src="/profile-regular.svg" width={15.15} height={19.22} alt="Profile Icon" />}
              label="Regular user"
              active={activeTab === 'user'}
              onClick={() => setActiveTab('user')}
            />
            <Tab
              icon={<Img src="/service-clarity.svg" width={24} height={24} alt="Service Icon" />}
              label="Service provider"
              active={activeTab === 'provider'}
              onClick={() => setActiveTab('provider')}
            />
          </div>

          <form>
            <Input
              label="Full name"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange('fullName')}
            />
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
            />
            <Input
              label="Phone number"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange('phoneNumber')}
            />
            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleInputChange('password')}
              showPasswordToggle
            />
            <Input
              label="Re-enter password"
              type="password"
              value={formData.reenterPassword}
              onChange={handleInputChange('reenterPassword')}
              showPasswordToggle
            />

            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                id="terms"
                className="
                 mt-1 mr-2
                 w-[14px] h-[14px]
                appearance-none
                border-2
                border-[#A16AE8]
                rounded
                checked:bg-[#A16AE8]
                checked:border-[#A16AE8]
                relative
                cursor-pointer
               focus:outline-none
              checked:after:content-['✓']
              checked:after:absolute
              checked:after:top-1/2
              checked:after:left-1/2
              checked:after:-translate-x-1/2
              checked:after:-translate-y-1/2
              checked:after:text-white
              checked:after:text-sm
              checked:after:font-bold 
             "
              />
              <label htmlFor="terms" className="font-circular text-[14px] font-books text-[#3F3F3F] mb-5">
                I agree to Dutiful`s <a href="#" className="text-[#A16AE8] hover:underline">terms and conditions</a>
              </label>
            </div>

            <Button type="submit" fullWidth>
              Sign up
            </Button>

            <p className="font-circular text-center font-books text-[16px] text-[#A3B1BF] mt-6">
              Already have an account? <Link href="/Login" className="text-[#A16AE8] hover:underline font-[450]">Login</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;