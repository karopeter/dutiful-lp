"use client";
import React, { useState} from "react";
import Link from "next/link";
import Input from "../reusables/Input";
import Button from "../reusables/Button";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto p-8">
          <p className="text-[#686868] font-circular font-books text-[16px] font-[450] mb-2">Jump right back in</p>
          <h1 className="text-[#1E1E4B] font-recoleta font-semibold text-[24px] md:text-[36px] mb-8">Login</h1>

          <div>
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
            />
            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleInputChange('password')}
              showPasswordToggle
            />

            <div className="text-right mb-6 font-circular font-books">
              <Link href="/forgot-password"  className="font-circular font-books text-[14px] text-[#A16AE8]">Forgot password?</Link>
            </div>

            <Button onClick={() => console.log('Login clicked')} fullWidth>
              Login
            </Button>

            <p className="font-circular font-books text-center text-[16px] font-[450] text-[#A3B1BF] mt-6">
              Don`t have an account? <Link href="/" className="text-[#603F8B]  font-medium">Sign up</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;