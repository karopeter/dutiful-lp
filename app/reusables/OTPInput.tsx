"use client";
import React from 'react';
import { OTPInputProps } from '../types/forgotPassword.types';

const OTPInput: React.FC<OTPInputProps> = ({ value, onChange }) => {
    const handleChange = (index: number, digit: string) => {
         if (digit.length > 1) digit = digit[0];
         if (!/^\d*$/.test(digit)) return;

         const newValue = [...value];
         newValue[index] = digit;
         onChange(newValue);

         if (digit && index < 3) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
         }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !value[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    return (
     <div className="flex gap-3 justify-center mb-6">
      {[0, 1, 2, 3].map((index) => (
        <input
          key={index}
          id={`otp-${index}`}
          type="text"
          maxLength={1}
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-14 h-14 text-center text-[16px] text-[#686868] font-semibold bg-[#F3F3F3] border-2 border-[#B6B6E5] rounded-[10px] focus:outline-none focus:border-[#B6B6E5] transition-colors"
        />
      ))}
    </div>
    );
};

export default OTPInput;

