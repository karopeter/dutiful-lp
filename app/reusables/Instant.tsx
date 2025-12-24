import Img from './Img';


const FeaturesSection = () => {
  const features = [
    {
      title: 'Get Discovered',
      description: "Dutiful is more than just a business directory; it also enhances your web profile. The platform makes use of SEO techniques to boost each listing's performance in the SERPs, providing any business the chance to rank, regardless of how strong their current online presence is.",
      image: '/discover-icon.svg'
    },
    {
      title: 'Instant Chat',
      description: "You'll be able to chat and send voice recordings with potential and existing customers, including managing your captured leads anytime, anywhere via the platform",
      image: '/instant-message.svg',
      overlap: true, 
    },
    {
      title: 'Quotations',
      description: "In addition to providing customers with access to information, offering customer quotations is very advantageous to the way you conduct your business. On Dutiful, you'll be able to send and receive quotation from customers - an important step in lead management.",
      image:  '/quote-icon.svg',
    },
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-10 lg:px-24 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: The Bold Phone & Purple Backdrop */}
        <div className="relative flex justify-center items-center">
          {/* Purple Background Shape */}
          <div className="bg-[#532F82] w-full max-w-[480px] h-[580px] rounded-[40px] relative">
            
            {/* The Bold Phone Image: Covers top and bottom length */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative w-[115%] h-[120%] -top-4">
                <Img
                  src="/mockup-lock.svg" 
                  alt="Dutiful App Mockup"
                  width={1000}
                  height={1500}
                  className="w-full h-full object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Feature Cards */}
        <div className="relative flex flex-col gap-8">
          {features.map((feature, index) => 
            <div 
              key={index} 
              style={{
                boxShadow: '0 10px 40px #EAE5F040'
              }}
              className={`
                bg-white p-8 md:p-10 rounded-[24px] border-[1px] border-[#EEEEFF] max-w-[580px]
                ${feature.overlap ? 'lg:-ml-32 z-20 shadow-[0_20px_60px_rgba(0,0,0,0.08)]' : 'z-10'}
                transition-transform duration-500 hover:scale-[1.02]
              `}
            >
              {/* Icon Circle */}
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center mb-6 shrink-0">
             <Img 
              src={feature.image} 
             alt={feature.title} 
             width={40} 
             height={40} 
            className="object-contain" 
           />
           </div>
              
              <div className="text-left">
                <h3 className="text-[20px] font-circular font-[700] text-[#464646] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#464646] text-[16px] font-circular font-books leading-[1.8]">
                  {feature.description}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;