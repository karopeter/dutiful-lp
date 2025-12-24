"use client";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { InputProps } from '../types/input.types';

const Input: React.FC<InputProps> = ({ 
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  showPasswordToggle = false,
  leftIcon,
  rightIcon
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

  return (
   <div className="mb-4">
     <label className='font-circular block text-[#603F8B] font-[500] text-[18px] mb-2'>{label}</label>
     <div className='relative'>
       {leftIcon && (
         <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A16AE8]">
           {leftIcon}
         </div>
       )}
       <input
         type={inputType}
         placeholder={placeholder}
         value={value} 
         onChange={onChange}
         className={`w-full ${leftIcon ? 'pl-12' : 'pl-4'} ${showPasswordToggle || rightIcon ? 'pr-12' : 'pr-4'} py-3 bg-[#F8FAFD] border-[2px] border-[#E7EAF1] rounded-[6px] focus:outline-none transition-colors`}
       />
       {showPasswordToggle && ( 
        <button 
         type='button'
         onClick={() => setShowPassword(!showPassword)}
         className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A16AE8]"
         >
         {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
       )}
       {rightIcon && !showPasswordToggle && (
         <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A16AE8]">
           {rightIcon}
         </div>
       )}
     </div>
   </div>
  );
};

export default Input;