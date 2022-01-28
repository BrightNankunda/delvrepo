import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faApple,
  faAndroid,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const [broswerHovered, setBrowserHovered] = useState(false)

  const broswerHasBeenHovered = () => {
    setBrowserHovered(true)
  }

  const removeHoverEvent = () => {
    setBrowserHovered(false)
  }
  return (
    <div className="footer pb-5 pt-10 px-10 text-white bg-navbar">
      <div className="footerWrapper lg:mt-10 xl:mt-10">
        <div className="row footerLowerDiv mt-10 pt-10 lg:flex lg:justify-between xl:justify-between xl:flex w-full">
          <div className="lg:w-1/4 xl:w-1/4">
            <h2 className="text-center contact-us py-3 px-5 justify-center mb-3 w-full">
              Contact Us
            </h2>
            <div></div>
          </div>
          <div className="my-3" onMouseOver={() => broswerHasBeenHovered()}>
            <h2>BROWSE {broswerHovered ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp}/>}
            </h2>
            {broswerHovered && <div className="broswe-links" onMouseLeave={() => removeHoverEvent()}>
              <h2 className="ml-4  my-3 text-sm">CAREER GUIDANCE</h2>
              <h2 class="ml-4 text-sm my-3">UPSKILL</h2>
              <h2 className="ml-4 text-sm my-3">JOBS</h2>
            </div>}
          </div>

          <div className="address-box my-4">
            <h2 className="mb-3">256 776 007 707</h2>

            <h2 className="my-5">info@delvcareers.com</h2>

            <h2 className="my-5 ">KG 19 AVE Street, </h2>

            <h2 className="my-5">Kigali, Rwanda</h2>
          </div>
          <div className="mt-3 mb-4 lg:px-auto xl:px-auto lg:w-1/4 xl:w-1/4">
            <div>
              <p className="w-full flex justify-between">
                <a href="https://facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://youtube.com" className="mr-6">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faAndroid} />{" "}
                <span className="ml-3">Android</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faApple} />
                <span className="ml-4"> iOS</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row footerLowerDiv border-t border-gray-50 mt-10 pt-10 lg:flex lg:justify-between xl:justify-between xl:flex w-full">
          <div className="lg:px-3 mt-4 mb-3">
            <p
              style={{
                height: "48px",
                width: "130px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url('https://irp.cdn-website.com/09b19d04/dms3rep/multi/delv-web-logo-01.svg')`
              }}
              className="delv text-xl mx-3 lg:my-auto text-"
            ></p>
          </div>
          <div></div>
          <div className="my-3 lg:px-3">
            <h1 className="font-weight-100 lead">
              &#169; 2022 All Rights Reserved | DELV Careers
            </h1>
          </div>
          <div className="mb-3 lg:px-3 text-sm">Privacy & Terms</div>
        </div>
      </div>
    </div>
  );
}
