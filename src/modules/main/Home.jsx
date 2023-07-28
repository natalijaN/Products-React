import React from "react";
import { useNavigate } from "react-router-dom";
import perfume from "../../assets/perfume.jpg";
import keyHolder from "../../assets/key-holder.jpg";
import iphone from "../../assets/iphone.jpg";
import femmePerfume from "../../assets/femme-perfume.jpg";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Image from "../../components/Image";
import Container from "../../components/Container";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };

  return (
    <div className="h-screen">
      <div className="container flex gap-x-2">
        <Container extraClass="text-group w-2/5 flex-col pl-28">
          <Container extraClass="flex-col items-start">
            <Heading text="your products." Tag="h3" extraClass="text-5xl " />
            <Heading text="your instagram." Tag="h3" extraClass="text-5xl " />
            <Heading
              text="made shoppable."
              Tag="h3"
              extraClass="text-5xl mb-5"
            />
          </Container>
          <Text extraClass="mb-8">
            Turn your Instagram, UGC, and ambassador content into shoppable
            galleries for your online store, email campaigns, and other
            channels.
          </Text>
          <Button onClick={handleClick} extraClass="bg-gray-500 p-3">
            <Text extraClass="hover-underline-animation">
              Go to all products.
            </Text>
          </Button>
        </Container>
        <Container extraClass="image-group justify-around">
          <Container extraClass="h-full w-5/12 flex-col items-end">
            <Image source={perfume} alt="perfume" extraClass="w-10/12 mb-4" />
            <Image source={femmePerfume} alt="femmePerfume" />
          </Container>
          <Container extraClass="h-full w-1/2 flex-col items-start">
            <Image source={iphone} alt="iphone" extraClass="w-3/4 mb-4" />
            <Image
              source={keyHolder}
              alt="keyHolder"
              extraClass="w-10/12 mb-4"
            />
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default Home;
