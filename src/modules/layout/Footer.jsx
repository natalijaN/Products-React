import React from "react";
import Text from "../../components/Text";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white bottom-0 left-0 w-full">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
    text-center pt-4 text-gray-400 text-sm pb-4"
        >
          <Text>© 2023 Appy. All rights reserved</Text>
          <Text>Terms · Privacy Policy</Text>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
