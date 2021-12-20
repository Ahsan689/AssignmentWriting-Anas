import React from "react";

import OurServices_2Cards from "./OurServices_2Cards";
import HeroSection from "./HeroSection";
import BrownHeader from "./BrownHeader";
import CopyRights from './CopyRights';

export default function ManagementCardComp() {
  return (
    <div className="App">
      {/* <BrownHeader/> */}
      <HeroSection/>
      <OurServices_2Cards/>
      {/* <CopyRights/> */}
    </div>
  );
}


