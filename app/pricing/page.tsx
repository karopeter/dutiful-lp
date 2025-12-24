'use client';

import React from 'react';
import Button from '../reusables/Button';
import { Check, X } from 'lucide-react';

type FeatureValue = string | boolean | React.ReactNode;

interface TableRow {
  label: string;
  basic: FeatureValue;
  standard: FeatureValue;
  premium: FeatureValue;
}

const PricingPlans = () => {
  const tiers = [
    {
      name: 'Basic',
      price: 'Free',
      features: [
        'Access to dashboard', 'Add up to 2 businesses', 'Add up to 2 products/services',
        'Add up to 2 images', 'Unlimited keywords', 'Display service hours and prices',
        'Display address, contact and email', 'Instant chat', 'Reviews and ratings',
        'Profile visibility', 'Instant notifications', 'Display website and social network',
        'Quotes', 'Bookmarks'
      ]
    },
    {
      name: 'Standard',
      price: 'NGN 20,000 /year',
      features: [
        'Access to dashboard', 'Add up to 5 businesses', 'Add up to 5 products/services',
        'Add up to 4 images', 'Unlimited keywords', 'Display service hours and prices',
        'Display address, contact and email', 'Instant chat', 'Reviews and ratings',
        'Profile visibility', 'Instant notifications', 'Display website and social network',
        'Quotes', 'Bookmarks', 'Number of profile views', 'Verified badge (purple)',
        'Accept & Sell appointment', 'Latest offers'
      ]
    },
    {
      name: 'Premium',
      price: 'NGN 30,000 /year',
      features: [
        'Access to dashboard', 'Add up to 10 businesses', 'Add up to 10 products/services',
        'Add up to 6 images', 'Unlimited keywords', 'Display service hours and prices',
        'Display address, contact and email', 'Instant chat', 'Reviews and ratings',
        'Profile visibility', 'Instant notifications', 'Display website and social network',
        'Quotes', 'Bookmarks', 'Number of profile views', 'Verified badge (Gold)',
        'Accept & Sell appointment', 'Latest offers', '24/7 service and support'
      ]
    }
  ];

  return (
    <section className="w-full">
      {/* 1. HEADER SECTION */}
      <div className="bg-white py-12 md:py-20 px-4 md:px-6 text-center">
        <h2 className="text-[#1E1E4B] text-[28px] md:text-[36px] font-semibold font-recoleta mb-4 px-2">
          Plans to Suit Your Business Budget
        </h2>
        <p className="text-[#656565] max-w-[700px] mx-auto text-[14px] font-circular font-books md:text-[16px] leading-relaxed px-4">
          Our fully organized plans deliver valuable content that showcases your services and skills, 
          drives leads, covers all features, and gives customers a clear idea to be able to choose your services.
        </p>
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="bg-[#F8FAFD] pb-24 px-4 md:px-6">
        <div className="container mx-auto">
          
          {/* PRICING CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto -translate-y-8 relative z-10">
            {tiers.map((tier, idx) => (
              <div 
                key={idx} 
                style={{ boxShadow: '0 10px 40px #EAE5F040' }}
                className="bg-white border border-[#EEEEFF] rounded-[12px] p-6 md:p-8 flex flex-col"
              >
                <span className="text-[#000000] font-circular font-books text-[16px] md:text-[22px] block mb-2">{tier.name}</span>
                <h3 className="text-[#000000] text-[28px] md:text-[48px] font-recoleta font-semibold mb-6 flex items-start">
                  {tier.price.includes('NGN') ? (
                    <>
                      <span className="text-[14px] text-[#000000] md:text-[18px] mt-1 md:mt-2 mr-1">NGN</span>
                      <span>{tier.price.split(' ')[1]}</span>
                      <span className="text-[12px] md:text-[20px] text-[#000000] font-recoleta font-semibold self-end mb-1 md:mb-2 ml-1">/year</span>
                    </>
                  ) : tier.price}
                </h3>
                
                <Button variant="primary" fullWidth={true}>Get started</Button>

                <ul className="mt-8 md:mt-10 space-y-3 md:space-y-4">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start font-circular font-books gap-3 text-[13px] md:text-[14px] text-[#656565]">
                      <Check size={16} className="text-[#000000] shrink-0 mt-0.5" />
                      <span className='font-circular font-books'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FEATURES OVERVIEW TABLE */}
          <div className="max-w-[1200px] mx-auto mt-20 overflow-hidden">
            <h3 className="text-[22px] md:text-[32px] font-circular font-[500] text-[#000000] mb-6 md:mb-10">Features Overview</h3>
            
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="text-[#000000] text-[18px] md:text-[22px]">
                    <th className="py-2"></th>
                    <th className="py-2 text-center font-circular font-[500]">Basic</th>
                    <th className="py-2 text-center font-circular font-[500]">Standard</th>
                    <th className="py-2 text-center font-circular font-[500]">Premium</th>
                  </tr>
                  
                  <tr className="border-b border-gray-100">
                    <th className="py-4 md:py-6 text-[#656565] text-[16px] md:text-[24px] font-circular font-books w-1/4">
                      Features & Services
                    </th>
                    <th className="py-4 md:py-6 text-center px-4">
                      <Button variant="primary" fullWidth>Get started</Button>
                    </th>
                    <th className="py-4 md:py-6 text-center px-4">
                      <Button variant="primary" fullWidth>Get started</Button>
                    </th>
                    <th className="py-4 md:py-6 text-center px-4">
                      <Button variant="primary" fullWidth>Get started</Button>
                    </th>
                  </tr>
                </thead>
                
                <tbody className="text-[#656565] text-[13px] md:text-[15px]">
                  {tableRows.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-50 hover:bg-white/50 transition-colors">
                      <td className="py-4 md:py-5 font-circular font-books pr-4">{row.label}</td>
                      <td className="py-4 md:py-5 text-center text-[#000000] text-[20px] font-circular font-books">{renderValue(row.basic)}</td>
                      <td className="py-4 md:py-5 text-center text-[#000000] text-[20px] font-circular font-books">
                        {row.label === 'Verified badge' ? <span>{row.standard}</span> : renderValue(row.standard)}
                      </td>
                      <td className="py-4 md:py-5 text-center text-[#000000] text-[20px] font-circular font-books">
                        {row.label === 'Verified badge' ? <span>{row.premium}</span> : renderValue(row.premium)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Helper function with strict typing ---
const renderValue = (val: FeatureValue) => {
  if (val === true) return <Check className="mx-auto text-[#AC64CE]" size={21.33} />;
  if (val === false) return <X className="mx-auto text-[#9E9E9E]" size={20} />;
  return val;
};

// --- Strictly typed data ---
const tableRows: TableRow[] = [
  { label: 'Access to dashboard', basic: true, standard: true, premium: true },
  { label: 'No. of business listings', basic: '2 Businesses', standard: '5 Businesses', premium: '10 Businesses' },
  { label: 'No. of products/services', basic: '2', standard: '5', premium: '10' },
  { label: 'No. of images', basic: '2', standard: '4', premium: '6' },
  { label: 'Keywords', basic: true, standard: true, premium: true },
  { label: 'Display service hours & prices', basic: true, standard: true, premium: true },
  { label: 'Quotes', basic: true, standard: true, premium: true },
  { label: 'Bookmarks', basic: true, standard: true, premium: true },
  { label: 'Profile views', basic: false, standard: true, premium: true },
  { label: 'Verified badge', basic: false, standard: 'Purple', premium: 'Gold' },
  { label: 'Accept & self appointment', basic: false, standard: true, premium: true },
  { label: '24/7 support', basic: false, standard: false, premium: true },
];

export default PricingPlans;