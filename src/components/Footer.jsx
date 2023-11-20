import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-color">
      <div className="footer-left">
        <a href="#">
          <img src="./public/logo.png" alt="" />
          <p>
            Mustafa İlker TEKİR |&nbsp;<span className="text-[#86205f]">Developer</span>
          </p>
        </a>
      </div>
      <div className="footer-mid">
        <p>
          Designed by <span className="text-[#86205f]">Mustafa İlker TEKİR</span> 2023 &copy;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
