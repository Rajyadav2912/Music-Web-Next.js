// export default function Home() {
//   return <h1>Hey Raj New Next.js Learing</h1>;
// }
import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import Testimonial from "@/components/Testimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="text-xl text-center"></div>
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonial />
      <UpcomingWebinars />
      <Instructor />
    </main>
  );
};

export default Home;
