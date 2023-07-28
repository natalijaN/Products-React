import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import EmailForm from "../EmailForm";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import Text from "../../components/Text";

const Contact = () => {
  return (
    <div className="h-full">
      <Container extraClass="flex-col items-center h-60">
        <Heading
          text="GOT A QUESTION?"
          Tag="h5"
          extraClass="font-bold mb-9 text-3xl"
        />
        <Text extraClass="max-w-md">
          Contact us. We’re here to help and answer any question you might have.
          We look forward to hearing from you
        </Text>
      </Container>

      <Container extraClass="items-center h-60">
        <div className="w-96 box-border h-36 w-32 p-4 shadow-xl">
          <Heading
            text="Contact Information"
            Tag="h4"
            extraClass="border-b-2 mb-4 font-medium"
          />
          <Container extraClass="items-baseline">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2 w-8" />
            <Text>Jane Sandanski, Skopje</Text>
          </Container>
          <Container extraClass="items-baseline">
            <FontAwesomeIcon icon={faPhone} className="mr-2 w-8" />
            <Text>+389 75745896</Text>
          </Container>
          <Container extraClass="items-baseline">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-8" />
            <Text>mail@natalija.com</Text>
          </Container>
        </div>
      </Container>

      <Container extraClass="items-center  mb-2">
        <EmailForm />
      </Container>
    </div>
  );
};

export default Contact;
