"use client";
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Input from '../reusables/Input';
import Link from 'next/link';
import Img from '../reusables/Img';
import Button from '../reusables/Button';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = () => {
      if (!email || !email.includes('@')) {
        setError(true);
        return;
      }
      setError(false);
      window.location.href = `/email-sent?email=${encodeURIComponent(email)}`;
    };

    return (
     <main className="flex-grow container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <button 
          onClick={() => window.history.back()}
          className="flex 
            items-center justify-center 
            w-[32px] h-[32px]
            cursor-pointer
            rounded-full
            border-[1px] border-[#E5E7EA] text-[#603F8B] mb-4"
        >
          <ArrowLeft size={11.22}  />
        </button>
        
        <div className="bg-white p-8">
          <h1 className="text-[#1E1E4B] font-recoleta font-semibold text-[24px] md:text-[36px] mb-8">Forgot password</h1>
          <p className="text-[#686868] text-[14px] font-circular font-books mb-8">
            Enter your email and we will send you a mail to reset your password.
          </p>

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            rightIcon={
              <Img
                src="/message-icon.svg" 
                alt="" 
                width={20} 
                height={20} 
              />
            }
          />

          {error && (
            <p className="text-red-500 text-sm -mt-3 mb-4">Please enter a valid email</p>
          )}

          <Button onClick={handleSubmit} fullWidth>
            Send email
          </Button>

          <p className="font-circular font-books text-center text-[16px] font-[500] text-[#A3B1BF] mt-6">
            or
            <Link href="/Login" className="ml-1 text-[#603F8B]  font-medium">Login</Link>
          </p>
        </div>
      </div>
    </main>
    );
};

export default ForgotPasswordPage;