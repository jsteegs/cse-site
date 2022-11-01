import type React from "react";

interface AboutUsBlurbPropTypes {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutUsBlurb = ({ title, description, icon }: AboutUsBlurbPropTypes) => {
  return (
    <div className="bg-zinc-800 rounded flex flex-col md:flex-row mb-6 py-8 xl:py-5 px-10">
      <div className="md:pr-6 mb-5 md:mb-0 mx-auto md:mx-0">{icon}</div>
      <div className="">
        <div className="font-gillsans font-bold md:text-lg xl:text-xl text-stone-100 pb-3">
          {title}
        </div>
        <div className="text-zinc-300 md:text-sm xl:text-base font-montserrat font-light">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AboutUsBlurb;
