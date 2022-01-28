import React from "react";
export default function MiddleBanner() {
  return (
    <div className="middleBannerWrapper">
      <div className="middleBanner">
        <div className="w-full middleBannerContent flex flex-col  lg:justify-end ml-10">
          <h1 className="text-center lg:text-left font-bold lg:text-4xl xl:text-5xl text-3xl join">
            Join Delv
          </h1>
          <p className="text-center lg:text-left mb-4 font-bold trainer text-2xl xl:text-5xl">
            Become a trainer today
          </p>
          <a
            className="mx-auto lg:ml-0 categoryLinkTag py-4 px-10 my-3 lg:mt-5 xl:mt-6"
            target="blank"
            href="google.com"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  );
}
