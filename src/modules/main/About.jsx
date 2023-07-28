import React from "react";
import femmePerfume from "../../assets/femme-perfume.jpg";
import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Text from "../../components/Text";
import Container from "../../components/Container";

const About = () => {
  return (
    <div className="h-screen">
      <Container extraClass="h-2/6 bg-gray-200">
        <Heading text="Our Story" Tag="h1" extraClass="text-4xl italic" />
      </Container>
      <Container extraClass="w-full absolute top-32">
        <Image source={femmePerfume} alt="femmePerfume" extraClass="w-2/6" />
      </Container>
      <Container extraClass="w-full absolute bottom-0.5 top-2/3">
        <Text extraClass="w-2/5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quam
          fugit rerum reiciendis sequi, deserunt vel odio adipisci quod quaerat!
          Aliquam recusandae nemo debitis nobis repudiandae, eveniet provident
          consequatur. Saepe.
        </Text>
      </Container>
    </div>
  );
};

export default About;
