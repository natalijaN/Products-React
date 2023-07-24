import React from "react";
import { Link } from "react-router-dom";
import perfume from "../../images/perfume.jpg";
import keyHolder from "../../images/key-holder.jpg";
import iphone from "../../images/iphone.jpg";
import femmePerfume from "../../images/femme-perfume.jpg";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="container flex gap-x-2">
        <div className="text-group w-2/5 flex flex-col justify-center items-start pl-28">
          <div>
            <h3 className="text-5xl tracking-tighter font-serif">
              your products.
            </h3>
            <h3 className="text-5xl tracking-tighter font-serif">
              your instagram.
            </h3>
            <h3 className="text-5xl tracking-tighter mb-5 font-serif">
              made shoppable.
            </h3>
          </div>
          <div className="mb-8">
            <p className="font-serif">
              Turn your Instagram, UGC, and ambassador content into shoppable
              galleries for your online store, email campaigns, and other
              channels.
            </p>
          </div>
          <button className="font-serif bg-gray-500 p-3 text-white rounded">
            <Link to="/main" className="hover-underline-animation">
              Go to all products.
            </Link>
          </button>
        </div>
        <div className="image-group flex justify-around">
          <div className="h-full w-5/12 flex flex-col items-end justify-center">
            <img
              src={perfume}
              alt="perfume"
              className="w-10/12 mb-4 rounded-md zoom shadow-2xl"
            />
            <img
              src={femmePerfume}
              alt="femmePerfume"
              className="rounded-md zoom shadow-2xl"
            />
          </div>
          <div className="h-full w-1/2 flex flex-col items-start justify-center">
            <img
              src={iphone}
              alt="iphone"
              className="w-3/4 mb-4 rounded-md zoom shadow-2xl"
            />
            <img
              src={keyHolder}
              alt="keyHolder"
              className="zoom w-10/12 bg-opacity-20 rounded-md shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
