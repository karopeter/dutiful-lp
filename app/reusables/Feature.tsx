import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  return (
    // "isolate" ensures that negative z-indices stay inside this section
    <section className="bg-white py-24 overflow-hidden isolate">
      <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: THE PERFECTED CARD STACK */}
        <div className="relative h-[700px] w-full flex items-center justify-center">
          
          {/* THE GRADIENT GLOW EFFECT */}
          {/* Using the exact colors and 123px blur from your design requirements */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full z-0"
            style={{
              background: 'linear-gradient(135deg, #7948BA 0%, #BB3B9FD4 83%)',
              filter: 'blur(123px)',
              opacity: 0.3, 
            }}
          />
          
          <div className="relative w-full max-w-[500px] h-full z-10">
            {/* Card 1: Top position */}
            <ReviewCard
              name="Adeola Fatoyinbo"
              rating={4}
              review="Tomi does a great job as an hair stylist. I haven't stopped coming back since I first patronized her."
              className="absolute top-[20px] left-[0px] -rotate-[10deg] z-10"
            />

            {/* Card 2: Positioned to touch the bottom-right of Card 1 */}
            <ReviewCard
              name="Adeola Fatoyinbo"
              rating={5}
              review="Perfecto! That's my exclamation everytime I patronize Johnson. His works are nothing short of amazing."
              className="absolute top-[200px] left-[160px] rotate-[10deg] z-20"
            />

            {/* Card 3: Positioned to touch the bottom-left of Card 2 */}
            <ReviewCard
              name="Adeola Fatoyinbo"
              rating={5}
              review="Perfecto! That's my exclamation everytime I patronize Johnson. His works are nothing short of amazing."
              className="absolute top-[380px] left-[30px] -rotate-[5deg] z-30"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: TEXT CONTENT */}
        <div className="max-w-xl">
          <h2 className="text-[24px] md:text-[36px] font-recoleta font-semibold text-[#1E1E4B] leading-[1.1] mb-6">
            Collect reviews and ratings from customers
          </h2>
          <p className="text-[#656565]  font-circular font-books  text-[16px]  leading-relaxed">
            Accelerate your business reputation by 90% and gain social proof through reviews and ratings requested from customers.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;