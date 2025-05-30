import React from "react";
import Abouthero from "../../components/company/AboutHero";
import MileStone from "../../components/company/MileStone";
import Team from "../../components/company/Team";

function Company() {
  return (
    <main className="main__wrapper w-full mt-20">
      <div className="hero__section w-9/12 mx-auto">
        <div className="hero__wrapper">
          <Abouthero />
        </div>
        <div className="mileStone__wrapper">
          <MileStone />
        </div>
        <div className="team__section">
          <Team />
        </div>
      </div>
    </main>
  );
}

export default Company;
