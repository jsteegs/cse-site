import type React from "react";

interface AboutUsBlurbPropTypes {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutUsBlurb = ({ title, description, icon }: AboutUsBlurbPropTypes) => {
  return (
    <div className="bg-zinc-800 rounded flex flex-col xl:flex-row mb-6 py-8 xl:py-5 px-10">
      <div className="xl:pr-6 mb-5 xl:mb-0 mx-auto xl:mx-0">{icon}</div>
      <div className="">
        <div className="font-gillsans font-bold text-xl text-stone-100 pb-3">
          {title}
        </div>
        <div className="text-zinc-300 text-md font-montserrat font-light">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AboutUsBlurb;
