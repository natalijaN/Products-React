import React from "react";
import Image from "../components/Image";
import Text from "../components/Text";
import Button from "../components/Button";

const Card = ({ cardId, card, currentPage, handleClick, children }) => {
  return (
    <div
      id={cardId}
      className="flex justify-center items-center flex-col gap-4 bg-lightGray rounded-lg py-8"
    >
      <Image source={card.thumbnail} alt="" extraClass="w-56" />
      <Text extraClass="text-[1.2rem] font-bold">{card.title}</Text>
      <Button
        onClick={() => handleClick(card)}
        state={{ card, currentPage, cardId }}
        extraClass="bg-gray-500 p-3 text-white rounded hover:bg-gray-700"
      >
        {children}
      </Button>
    </div>
  );
};

export default Card;
