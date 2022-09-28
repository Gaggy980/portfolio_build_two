import React from "react";

type Props = {};

function ContactMe({}: Props) {
  return (
    <div
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl
    justify-evenly mx-auto items-center px-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-400">
        Contact
      </h3>
      <div className="flex flex=col space-y-10">
        <h4 className="text-4xl text-center">
          I have got just what you need. {""}
          <span className="underline decoration-red-600/50">Let's Talk.</span>
        </h4>

        <div className="">
            
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
