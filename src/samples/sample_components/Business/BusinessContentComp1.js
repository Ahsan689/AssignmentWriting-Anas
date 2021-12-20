import React from "react";
import BusinessContent_1 from "./BusinessContent_1";

import HeroSection from "./HeroSection";
import BrownHeader from "./BrownHeader";
import CopyRights from './CopyRights';

export default function BusinessContentComp1() {
  return (
    <div className="App">
      {/* <BrownHeader/> */}
      <HeroSection/>
      <BusinessContent_1/>
      {/* <CopyRights/> */}
    </div>
  );
}


