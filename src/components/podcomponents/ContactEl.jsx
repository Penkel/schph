import React from "react";

const ContactEl = ({ icon, text, link }) => {
  return (
    <a href={link} className="text-xl transition-colors hover:text-gray-700">
      <div className="flex flex-row mt-2 ">
        <div>{icon}</div>
        <p className="ml-3 ">{text}</p>
      </div>
    </a>
  );
};

export default ContactEl;
