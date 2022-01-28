import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight
  
} from "@fortawesome/free-solid-svg-icons";
export default function Categories() {
  const [links, setLinks] = useState([
    {
      name: "WRITING",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    },
    {
      name: "BUSINESS",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    },
    {
      name: "PHOTO & FILM",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    },
    {
      name: "IT & SOFTWARE",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    },
    {
      name: "PUBLIC SPEAKING",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    },
    {
      name: "DESIGN",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    },
    {
      name: "ANIMATION",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    },
    {
      name: "ILLUSTRATION",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    },
    {
      name: "PUBLIC SPEAKING",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    },
    {
      name: "DESIGN",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    },
    {
      name: "ANIMATION",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    },
    {
      name: "ILLUSTRATION",
      link: "/site/09b19d04/?preview=true&insitepreview=true&dm_device=desktop"
    }
  ]);
  return (
    <div className="categoriesWrapper">
      <div className="mx-auto w-10/12">
        <h1 className="font-bold mb-4 text-4xl text-center categoriesHeader">
          Top Categories
        </h1>
        <h3 className="text-center lead mb-8 text-xl">
          Explore new skills, deepen existing passions, and get lost in
          creativity.
        </h3>

        <div className="w-full ">
          <div className="my-2 pt-2 w-full lg:flex xl:flex">
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">WRITING <span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">BUSINESS<span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">PHOTO & FILM <span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">IT & SOFTWARE<span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
          </div>
          <div className="my-2 pt-2 w-full lg:flex xl:flex">
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">PUBLIC SPEAKING<span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">DESIGN<span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">ANIMATION<span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">ILLUSTRATION<span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
          </div>
          <div className="my-2 pt-2 w-full lg:flex xl:flex">
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">PUBLIC SPEAKING<span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">DESIGN<span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">ANIMATION<span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
            <div className="w-9/12 mx-auto lg:mx-2 xl:mx-3 flex justify-center categoryLinkTag lg:w-1/4 xl:w-1/4 my-3 py-4 px-10">
              <a className="">ILLUSTRATION<span className="ml-2"><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center my-3">
          <a className="mx-auto categoryLinkTag py-4 px-10" href="{l.link}">
            DISCOVER MORE
          </a>
        </div>
      </div>
    </div>
  );
}
