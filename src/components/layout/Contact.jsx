import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import EmailForm from "../forms/EmailForm";

const Contact = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-center items-center h-60">
        <h3 className="font-bold mb-9">GOT A QUESTION?</h3>
        <div className="max-w-md">
          Contact us. We’re here to help and answer any question you might have.
          We look forward to hearing from you
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-96 box-border h-36 w-32 p-4 shadow-xl">
          <h4 className="border-b-2 mb-4 font-medium">Contact Information</h4>
          <div className="flex items-baseline">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2 w-8" />
            <p>Jane Sandanski, Skopje</p>
          </div>
          <div className="flex items-baseline">
            <FontAwesomeIcon icon={faPhone} className="mr-2 w-8" />
            <p>+389 75745896</p>
          </div>
          <div className="flex items-baseline">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-8" />
            <p>mail@natalija.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-2">
        <EmailForm />
      </div>
    </div>
  );
};

export default Contact;
