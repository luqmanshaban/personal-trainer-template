'use client'

import Hero from "./pages/home/Hero";
import Feature from "./pages/Feature";
import MemberShip from "./pages/home/ui/MemberShip";
import Testimonials from "./pages/home/ui/Testimonials";
import Cta from "./pages/home/ui/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Feature />
      <MemberShip />
      <Testimonials />
      <Cta />
      <Footer />
  </div>
  );
}
