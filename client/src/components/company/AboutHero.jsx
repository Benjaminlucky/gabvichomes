import React from "react";

function Abouthero() {
  return (
    <div className="aboutHero__container w-full text-white">
      <div className="aboutHero__wrapper w-full py-30">
        <div className="contentTop flex justify-center items-center">
          <h2 className="w-8/12 leading-18 text-5xl font-bold text-center">
            To redefine real estate living through sustainable, smart, and
            customer-centric developments globally
          </h2>
        </div>
        <div className="contentBottom flex justify-center items-center mt-36">
          <div className="cBWrap grid grid-cols-2 justify-center items-center gap-8">
            <div className="left">
              <div className="left__content">
                <img
                  src="/assets/companyHero.png"
                  alt="A model of Gabvic Homes development"
                  className="w-[600px] h-full object-cover"
                />
              </div>
            </div>
            <div className="right">
              <div className="leftContent">
                <h3 className="text-5xl hyphens-auto leading-18 font-semibold mb-4">
                  To be the leading real estate group delivering innovative
                  housing and investment solutions across continents.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouthero;
