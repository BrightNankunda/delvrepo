import React, { useState } from "react";

export default function Articles() {
  const [arts, setArts] = useState([
    {
      target: "",
      img:
        "https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-1438190-1280w.jpeg",
      title: "Creative Writing",
      description: "Crafting Personal Essays with Impact",
      author: "NDAHIRO RICHARD"
    },
    {
      target: "",
      img:
        "https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-2312369-1280w.jpeg",
      title: "Graphic Design",
      description: "Create a Bold, Colorful Album Cover",
      author: "JEREMY BYEMANZI"
    },
    {
      target: "",
      img:
        "https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-6000100-1280w.jpeg",
      title: "The Staples of Branding",
      description: "From Purpose to Product",
      author: "ARIHO KAMARA"
    },
    {
      target: "",
      img:
        "	https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-5053836-1280w.jpeg",
      title: "Finding Instagram Success",
      description: "Build an Account People Care About",
      author: "SHARON NDAHIRO"
    }
  ]);
  return (
    <div className="categoriesWrapper">
      <div className="mx-auto w-10/12">
        <h1 className="articleHeader font-bold mb-4 text-2xl  lg:text-4xl xl:text-4xl text-center categoriesHeader">
          Explore Articles
        </h1>
        <h3 className="my-6 text-center lead text-lg lg:text-xl">
          Choose from 30,000 online video courses with new additions published
          every month.
        </h3>

        <div className="w-full lg:flex xl:flex sm:flex-col md:flex-col lg:flex-row">
          {arts &&
            arts.map((a) => (
              <div className="w-full lg:w-1/4 xl:w-1/4 p-3 mx-2 my-3">
                <a className="" href="">
                  <div
                    className="articleImage w-full"
                    style={{
                      height: "250px",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: `url(${a.img})`
                    }}
                  ></div>
                  {/* <img src={require({`${a.img}`})} className="w-full" alt="a.title" /> */}
                </a>
                <div className="w-full my-1">
                  <p className="articleText w-full text-center lg:text-left">
                    {a.title + ":  " + a.description}
                  </p>
                </div>
                <div className="w-full text-center lg:text-left articleAuthor mb-1 mt-1 text-gray-800 text-sm">
                  {a.author}
                </div>
              </div>
            ))}
        </div>
        <div className="w-full flex justify-center mt-8 mb-2">
          <a className="mx-auto categoryLinkTag py-4 px-10" href="{l.link}">
            EXPLORE ARTICLES
          </a>
        </div>
      </div>
    </div>
  );
}
