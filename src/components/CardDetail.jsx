import React from "react";
import ImageSlider from "../modules/ImageSlider";
import Heading from ".//Heading";
import Text from "./Text";
import Button from "./Button";
import Container from "./Container";

const CardDetail = ({ card, currentPage, handleClick, slides, children }) => {
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
    marginBottom: "1rem",
  };
  return (
    <Container extraClass="product-container h-screen flex-col justify-start items-center">
      <Heading text={card.title} Tag="h3" extraClass="font-bold mb-9" />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <Text>{card.description}</Text>
      <Text>{`Price: ${card.price}`}</Text>
      <Text>{`Discount: ${card.discountPercentage}%`}</Text>
      <Button
        onClick={() => handleClick(card)}
        state={{ card, currentPage }}
        extraClass="bg-gray-500 p-3 hover:bg-gray-700"
      >
        <Text extraClass="hover-underline-animation">{children}</Text>
      </Button>
    </Container>
  );
};

export default CardDetail;
