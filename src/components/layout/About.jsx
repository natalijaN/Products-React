import React from "react";
import femmePerfume from "../../images/femme-perfume.jpg";

const About = () => {
  return (
    <div className="h-screen">
      <div className="h-2/6 bg-gray-200 flex justify-center items-start">
        <h1 className="text-4xl font-semibold italic font-mono">Our Story</h1>
      </div>
      <div className="flex justify-center items-center w-full absolute top-32">
        <img src={femmePerfume} alt="femmePerfume" className="w-2/6" />
      </div>
      <div className="flex justify-center items-center w-full absolute bottom-0.5 top-2/3">
        <p className="flex justify-center items-center w-2/5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quam
          fugit rerum reiciendis sequi, deserunt vel odio adipisci quod quaerat!
          Aliquam recusandae nemo debitis nobis repudiandae, eveniet provident
          consequatur. Saepe.
        </p>
      </div>
    </div>
  );
};

export default About;
