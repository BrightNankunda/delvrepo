import React from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="nav">
      <nav className="flex items-center justify-between flex-wrap bg-navbar p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6"></div>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="lg:w-full flex items-center d-flex lg:flex-row flex-col justify-between h-full px-10">
          {/* <Link to="/"> */}
          <li className="md:mx-2 text-white hover:font-bold">
            <img
              src="https://irp.cdn-website.com/09b19d04/dms3rep/multi/delv-web-logo-01.svg"
              alt="Delv"
            />
          </li>
          <div className="mx-5 lg:mr-auto lg:flex  xl:mr-auto">
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
            <p className="text-white lg:my-auto">
              BROWSE{" "}
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            </p>
          </div>
          {/* </Link> */}
          {/* <Link to="/workcontainer"> */}
          <li className="text-white mx-3">LOGIN</li>
          {/* </Link> */}
          {/* <Link to="/liveportal" className="border px-4 py-2 rounded-signup"> */}
          <li className="sm:w-max text-white mx-3 border px-4 py-2 rounded-signup">
            {" "}
            SIGNUP TODAY{" "}
          </li>
          {/* </Link> */}
        </ul>
      </nav>
    </div>
  );
}
