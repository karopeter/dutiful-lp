import React from "react";
import FeaturesSection from "../reusables/Instant";
import Hero from "../reusables/HeroSection";
import ReviewsSection from "../reusables/Feature";
import AppointmentSection from "../reusables/AppointmentSection";

const Homepage: React.FC = () => {
 return (
     <>
    <Hero />
     <ReviewsSection />
     <FeaturesSection />
     <AppointmentSection />
    </>
 )
};

export default Homepage;