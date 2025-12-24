import Img from "./Img";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 lg:px-16 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-[#230B34] font-recoleta font-semibold  text-[36px] mb-4">
          List and grow your business <br /> with just few clicks
        </h1>
        <p className="text-[#383838] font-circular font-books text-[20px]">
          Eliminate manual work and save time by listing your business or service on the best business directory in Nigeria.
        </p>
      </div>
      <div className="p-8 overflow-hidden">
        <Img 
         src="/overview.svg"
         alt="Overview Icon"
         width={674}
         height={563}
        />
      </div>
    </section>
  );
};

export default Hero;