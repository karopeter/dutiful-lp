"use client";
import { useState, Suspense } from 'react'; 
import Button from '../reusables/Button';
import OTPInput from '../reusables/OTPInput';
import { useSearchParams } from 'next/navigation';


const EnterOTPContent = () => {
  const searchParams = useSearchParams();
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const email = searchParams.get('email') || '';

  const handleVerify = () => {
    if (otp.every(digit => digit !== '')) {
      window.location.href = `/reset-password?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto p-8">
        <OTPInput value={otp} onChange={setOtp} />
        
        <p className="text-[#686868] font-circular font-books text-[16px] text-center mb-8">
          Enter OTP code that was sent to your email,
          <br />
          <span className="font-semibold text-black">{email}</span>.
        </p>

        <Button onClick={handleVerify} fullWidth>
          Confirm OTP
        </Button>

        <p className="font-circular font-[500] text-center text-[16px] text-[#A3B1BF] mt-6">
          Didn`t get code? <a href='#' className="text-[#603F8B] font-medium hover:underline">Resend</a>
        </p>
      </div>
    </main>
  );
};


const EnterOTPPage = () => {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[#603F8B] font-circular animate-pulse">Loading...</p>
      </div>
    }>
      <EnterOTPContent />
    </Suspense>
  );
};

export default EnterOTPPage;