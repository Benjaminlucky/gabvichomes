import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer__section w-full bg-bronze-800">
      <div className="footerwrapper w-9/12 mx-auto py-4">
        <div className="footer__content flex flex-col md:flex-row justify-between items-center">
          <div className="left text-center text-[12px] md:text-lg font-semibold text-lnight-800">
            <p>
              &copy; {currentYear} All Rights Reserved | Gabvic Homes Limited
            </p>
          </div>
          <div className="right text-center text-[12px] md:text-lg font-semibold text-night-500">
            <p>Developed by Inspireme Media Networks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
