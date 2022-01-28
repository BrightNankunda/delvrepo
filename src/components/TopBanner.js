import React from "react";
export default function TopBanner() {
  return (
    <div className="topBannerWrapper mt-10 mb-10">
      <div className="my-6">.</div>
      <div className="topBanner">
        <div className="topBannerContent lg:w-5/12 xl:w-5/12 flex flex-col justify-center lg:ml-10 xl:ml-10 xl:pl-10 lg:pl-10">
          <h1 className="text-center lg:text-left xl:text-left upskill text-3xl lg:text-6xl xl:text-7xl">
            UpSkill
          </h1>
          <h1 className="text-center lg:text-left xl:text-left re-invent text-3xl lg:text-6xl xl:text-7xl ">
            Re-invent
          </h1>
          <h1 className="text-center lg:text-left xl:text-left re-invent text-3xl lg:text-6xl xl:text-7xl">
            yourself.
          </h1>
          <p className="text-center lg:text-left xl:text-left learning text-md">
            Learning has never been this easy. It’s just a click away
          </p>
        </div>
      </div>

      <div class="w-full formWrapper">
        <div className="w-10/12 mx-auto formSubWrapper bg-white py-8 md:py-10">
          <div className="topBannerForm mx-auto px-8 md:px-10">
            <form>
              <input
                className="searchInput w-full px-3 rounded-input"
                placeholder="What do want to learn today?"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
