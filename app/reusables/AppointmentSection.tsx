'use client';

import React, { useState } from 'react';
import Img from './Img';

const AppointmentSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 8, 1));
  const [selectedDay, setSelectedDay] = useState(19);
  const [selectedTime, setSelectedTime] = useState('15:00');

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const changeMonth = (offset: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
    setCurrentDate(newDate);
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const timeSlots = ['13:30', '14:00', '14:30', '15:00'];

  return (
    <section className="bg-white py-12 md:py-24 px-4 md:px-10 lg:px-24 overflow-visible">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 xl:gap-24">
        
        {/* LEFT COLUMN: THE UI COMPONENTS */}
        <div className="relative flex flex-col items-center lg:items-start">
          
          {/* 1. BOOKED CARD */}
          <div 
            style={{ 
              width: '100%',
              maxWidth: '306px',
              boxShadow: '0 10px 30px #9C9C9C17'
            }}
            className="bg-white rounded-[16px] py-4 px-6 flex items-center justify-between z-30 border border-[#EEEEFF] mb-5 relative"
          >
            <div className="flex -space-x-3">
              {['/booked1.svg', '/booked2.svg', '/booked3.svg'].map((src, index) => (
                <div key={index} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                   <Img 
                    src={src} 
                    alt={`User ${index + 1}`}
                    width={40} 
                    height={40} 
                    className='object-cover'
                    />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#FFFFFF] bg-[#9B51E0] flex items-center justify-center text-white text-[12px] font-bold">
                +4
              </div>
            </div>
            <span className="text-[#000000] font-circular font-books text-[20px]">Booked</span>
          </div>

          {/* 2 & 3. CALENDAR AND TIME CARD CONTAINER */}
          {/* This flex-row on md/lg keeps them side-by-side on desktop */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 xl:gap-6 relative">
            
            {/* 2. CALENDAR BASE */}
            <div 
              style={{ width: '306px', minHeight: '340px', boxShadow: '0 4px 25px #00000017' }}
              className="bg-white rounded-[8px] p-5 relative z-10"
            >
              <div className="flex justify-between items-center mb-6 px-1">
                <button onClick={() => changeMonth(-1)} className="text-[#B5BEC6] hover:text-gray-500 text-2xl select-none">‹</button>
                <h4 className="text-[#4A5660] font-circular font-books text-[14px]">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h4>
                <button onClick={() => changeMonth(1)} className="text-[#B5BEC6] hover:text-gray-500 text-2xl select-none">›</button>
              </div>
              
              <div className="grid grid-cols-7 gap-y-2 text-center">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                  <span key={day} className="text-[10px] text-[#B5BEC6] font-semibold font-circular tracking-widest uppercase mb-1">{day}</span>
                ))}
                
                {daysArray.map((day) => (
                  <div key={day} className="flex justify-center items-center h-8">
                    <button 
                      onClick={() => setSelectedDay(day)}
                      className={`text-[13px] w-8 h-8 flex items-center justify-center transition-all rounded-full
                        ${selectedDay === day 
                          ? 'bg-[#FF4D12] text-white shadow-md font-circular font-books' 
                          : 'text-[#4A5660] font-circular font-books hover:bg-gray-50'}
                      `}
                    >
                      {day}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. TIME CARD */}
            {/* -mt-10 only on desktop to overlap without touching Booked card layout box */}
            <div 
               style={{ boxShadow: '0 15px 45px #00000017' }}
               className="bg-white rounded-[12px] p-4 flex flex-row md:flex-col gap-3 z-20 md:-mt-12 lg:-mt-4"
            >
              {timeSlots.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`w-[85px] md:w-[100px] py-3 md:py-4 rounded-[8px] text-center font-bold text-[13px] md:text-[14px] transition-all
                    ${selectedTime === time 
                      ? 'bg-[#60359E] text-white shadow-xl shadow-purple-100' 
                      : 'bg-white border border-gray-100 text-[#1E212C] hover:border-purple-200'}
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: TEXT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-[24px] md:text-[36px] font-recoleta font-semibold text-[#1E1E4B] mb-2">
            Accept and sell appointments
          </h2>
          <p className="text-[#656565] font-circular font-books text-[18px] md:text-[20px] leading-[1.7] max-w-[500px]">
            Let customers book their own appointment or consultation. 
            Start accepting payments for appointments through your booking page.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AppointmentSection;