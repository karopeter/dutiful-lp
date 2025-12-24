"use client";
import React, { useState } from 'react';
import Input from '../reusables/Input';
import Link from 'next/link';
import Button from '../reusables/Button';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      // Navigate to success page or login
      alert('Password reset successful!');
      window.location.href = '/login';
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto p-8">
        <h1 className="text-[#1E1E4B] font-recoleta font-semibold text-[24px] md:text-[36px] mb-8">Reset password</h1>
        <p className="text-[#686868] text-[16px] font-circular font-books mb-8">Set your new password</p>

        <Input
          label="Enter new password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          showPasswordToggle
        />
        <Input
          label="Re-enter new password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          showPasswordToggle
        />

        <Button onClick={handleReset} fullWidth>
          Reset password
        </Button>

        <p className="font-circular font-books text-center text-[16px] text-[#A3B1BF] mt-6">
            Or 
          <Link href="/SignUp" className="ml-1 text-[#603F8B] font-medium">Create new account</Link>
        </p>
      </div>
    </main>
  );
};


export default ResetPasswordPage;