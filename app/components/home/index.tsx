"use client";
import { NavBar } from "../navbar";
import { HeroSection } from "../hero";
import { PinnedGallery } from "../gallery";
import { Services } from "../services";
import { Footer } from "../footer";
import { Location } from "../location";
import { BookingSection } from "../booking";
import { DesignerProfile } from "../designer-profile";
import { Testimonials } from "../testimonials";

const MehndiWebsite = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      <NavBar />
      <HeroSection />
      <PinnedGallery />
      <Services />
      <DesignerProfile />
      <Testimonials />
      <BookingSection />
      <Location />
      <Footer />
    </div>
  );
};

export default MehndiWebsite;
