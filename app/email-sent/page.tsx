"use client";
import { Suspense } from 'react';
import { Check } from 'lucide-react';
import Img from '../reusables/Img';
import Button from '../reusables/Button';
import { useSearchParams } from 'next/navigation';


const EmailSentContent = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  const handleNext = () => {
    if (email) {
      window.location.href = `/enter-otp?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-xl p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="w-[100px] h-[100px] bg-[#F8F3FF] rounded-full flex items-center justify-center">
              <Img 
               src="/empty-image.svg"
               alt="Empty Image"
               width={80}
               height={80}
              />
            </div>
            <div className="absolute -top-0 -right-0 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
              <Check size={16} className="text-white" />
            </div>
          </div>
        </div>

        <p className="font-circular font-books text-[#686868] text-[14px] mb-8">
          An OTP code has been sent to <span className="font-semibold text-black">{email}</span>.
          <br />
          Check your email to get the code.
        </p>

        <Button onClick={handleNext} fullWidth>
          Next
        </Button>
      </div>
    </main>
  );
};

export default function EmailSentPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[#603F8B] font-circular">Loading...</p>
      </div>
    }>
      <EmailSentContent />
    </Suspense>
  );
}