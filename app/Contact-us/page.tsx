'use client';

import Button from '../reusables/Button';
import Input from '../reusables/Input';
import Img from '../reusables/Img';
import { ChevronDown } from 'lucide-react';


const ContactSection = () => {
     const contactInfo = [
    {
      title: 'Customer support',
      content: 'Please fill out the form below',
      image: '/support-icon.svg', 
    },
    {
      title: 'Business address',
      content: 'Suites C113 & C114 Akord Shopping Mall, Bogije, Elemoro, 101001, Lagos, Nigeria',
      image: '/business-icon.svg',
    },
    {
      title: 'Phone number',
      content: '+234 903 921 6724',
      image: '/phone-icon.svg', 
    },
  ];
  return (
    <section className="bg-white pb-24">
      {/* 1. PURPLE HEADER SECTION */}
      <div className="pt-20 pb-32 px-6 text-center relative overflow-hidden">
        {/* Subtle Pattern Overlay (Optional: can use a background image if available) */}
        <div className="absolute inset-0 pointer-events-none" 
             style={{ backgroundImage: `url('/touch.svg')` }} 
        />
      </div>

      {/* 2. OVERLAPPING CONTACT CARDS */}
      <div className="container mx-auto px-6 -mt-8 relative z-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-[1150px] mx-auto items-stretch">
  {contactInfo.map((item, index) => (
    <div 
      key={index} 
      style={{ boxShadow: '0 10px 40px #EAE5F040' }}
      className="bg-white rounded-[12px] p-8 border border-[#EEEEFF] flex flex-col items-center text-center h-full"
    >
      <div className="flex items-center justify-center gap-4 mb-2 w-full min-h-[60px]">
        <div className="w-12 h-12 shrink-0">
          <Img 
            src={item.image} 
            alt={item.title} 
            width={48} 
            height={48} 
            className="object-contain" 
          />
        </div>
        <h4 className="text-[#1E1E4B] font-circular font-[500] text-[22px] leading-tight">
          {item.title}
        </h4>
      </div>
      <p className="text-[#656565] text-[16px] font-circular font-books  max-w-[280px]">
        {item.content}
      </p>
    </div>
  ))}
</div>
      </div>

      {/* 3. CONTACT FORM */}
      <div className="container mx-auto px-6 mt-20">
        <form className="max-w-[500px] mx-auto bg-white">
          <Input 
            label="Full name" 
            placeholder="Enter your full name" 
          />
          
          <Input 
            label="Email" 
            type="email" 
            placeholder="Enter your email" 
          />

          <Input 
            label="Business type (Optional)" 
            placeholder="Enter business type" 
          />

          <Input 
            label="Subject" 
            placeholder="Select subject" 
            rightIcon={<ChevronDown size={20} />}
          />

          <div className="mb-8">
            <label className='font-circular block text-[#603F8B] font-[500] text-[18px] mb-2'>
              Write your message
            </label>
            <textarea 
              rows={5}
              placeholder="Enter your message here"
              className="w-full px-4 py-3 bg-[#F8FAFD] border-[2px] border-[#E7EAF1] rounded-[6px] focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="primary" fullWidth={true}>
              Send message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;