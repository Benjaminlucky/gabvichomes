import React from "react";

function MileStone() {
  return (
    <div class="bg-[#0b0b17] text-white py-8 md:py-16 px-4 sm:px-8">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-center text-lg text-gray-400">
          Our Evolution and Track Record
        </h2>
        <h1 class="text-center text-4xl font-bold mb-12">Our Journey</h1>

        <div class="relative">
          {/* <!-- Orange vertical highlight line --> */}
          <div class="absolute left-4 top-0 bottom-0 w-1 bg-bronze-500  z-0"></div>

          {/* <!-- Timeline items container --> */}
          <div class="relative pl-10 space-y-16 z-10">
            {/* <!-- Item 1 --> */}
            <div class="relative">
              <div class="absolute left-[-2.1rem] top-0 w-6 h-6 bg-[#0b0b17] bg-bronze-500  rounded-full z-10"></div>
              <div>
                <h3 class="text-xl font-bold">2019</h3>
                <h4 class="text-lg font-semibold mt-1">
                  Launch of Hilltop Castle Estate
                </h4>
                <p class="text-sm text-gray-300 mt-1 text-justify hyphens-auto">
                  Located in Imokun Community, Shiraye Road, Poka-Eredo, Epe
                  L.G.A, Lagos, Hilltop Castle Estate is a prime real estate
                  development launched on July 20, 2019. Covering a total of 6
                  acres, the estate is divided into 600 sqm plots.
                </p>
                <button class="mt-3 px-4 py-3 bg-bronze-500 text-white rounded hover:bg-orange-600 transition">
                  Read more
                </button>
              </div>
            </div>

            {/* <!-- Item 2 --> */}
            <div class="relative">
              <div class="absolute left-[-2.1rem] top-0 w-6 h-6 bg-[#0b0b17] bg-bronze-500  rounded-full z-10"></div>
              <div>
                <h3 class="text-xl font-bold ">2021</h3>
                <h4 class="text-lg font-semibold mt-1">
                  Expansion into Hilltop Bungalow Penthouse
                </h4>
                <p class="text-sm text-gray-300 mt-1 text-justify hyphens-auto">
                  An extension of Hilltop Castle Estate, the Bungalow Penthouse
                  project, launched on October 22, 2021, offers modern
                  residential units in the same prime location—Imokun Community,
                  Shiraye Road, Poka-Eredo, Epe. This development spans 6 acres,
                  with plots measuring 600 sqm each.
                </p>
                <button class="mt-3 px-4 py-2 bg-bronze-500  text-white rounded hover:bg-orange-600 transition">
                  Read more
                </button>
              </div>
            </div>

            {/* <!-- Item 3 --> */}
            <div class="relative">
              <div class="absolute left-[-2.1rem] top-0 w-6 h-6 bg-[#0b0b17] bg-bronze-500  rounded-full z-10"></div>
              <div>
                <h3 class="text-xl font-bold ">2023</h3>
                <h4 class="text-lg font-semibold mt-1">
                  Alaafin Imperial Court
                </h4>
                <p class="text-sm text-gray-300 mt-1 text-justify hyphens-auto">
                  Alaafin Imperial Court is an exclusive, secure estate within
                  the New Lekki Smart City, featuring 32 architecturally
                  distinct homes. Designed for those who appreciate royalty,
                  serenity, and prestige, this estate offers a luxurious living
                  experience inspired by Yoruba heritage.
                </p>
                <button class="mt-3 px-4 py-2 bg-bronze-500  text-white rounded hover:bg-orange-600 transition">
                  Read more
                </button>
              </div>
            </div>
            {/* <!-- Item 4 --> */}
            <div class="relative">
              <div class="absolute left-[-2.1rem] top-0 w-6 h-6 bg-[#0b0b17] bg-bronze-500  rounded-full z-10"></div>
              <div>
                <h3 class="text-xl font-bold ">2024</h3>
                <h4 class="text-lg font-semibold mt-1">
                  Entry into the US Market with GabvicHomes LLC
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MileStone;
