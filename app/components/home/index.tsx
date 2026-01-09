"use client";
import { NavBar } from "../navbar";
import { HeroSection } from "../hero";
import { PinnedGallery } from "../gallery";
import { Services } from "../services";
import { Footer } from "../footer";
import { Location } from "../location";
import { BookingSection } from "../booking";

const MehndiWebsite = () => {
  
  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation */}
      <NavBar/>

      {/* Hero Section */}
      <HeroSection/>

      {/* GSAP Pinned Scrolling Gallery with Filling Palm Design */}
      <PinnedGallery/>

      {/* Services Section - More Modern */}
      

      {/* About Section - Modern Design */}
      <Services/>

      {/* Booking Section - Ultra Modern */}
      <BookingSection/>

      {/* Location Section */}
      <Location/>

      {/* Footer - Modern */}
      <Footer/>
    </div>
  );
};

export default MehndiWebsite;
