import React from "react";
import { ButtonProps } from "../types/button.types";

const Button: React.FC<ButtonProps> = ({ 
    children,
    onClick,
    variant = 'primary',
    fullWidth = false,
    type = 'button'
}) => {
  const baseStyles = "font-circular rounded-[8px] font-medium transition-all cursor-pointer shadow-sm flex items-center justify-center";
   
  const paddingStyles = "py-[18px] px-[60px]";

  const variantStyles = variant === 'primary' 
   ? "bg-[#532F82] text-white  hover:bg-[#432669]" 
   : "bg-white text-purple-700 border-2 border-purple-700 hover:bg-purple-50";

  const widthStyles = fullWidth ? "w-full" : "w-auto";

  return (
   <button
     type={type}
     onClick={onClick}
     className={`${baseStyles} ${paddingStyles} ${variantStyles} ${widthStyles}`}
   >
    {children}
   </button>
  );
};

export default Button;