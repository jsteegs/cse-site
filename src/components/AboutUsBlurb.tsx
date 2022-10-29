import type React from "react";

interface AboutUsBlurbPropTypes {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutUsBlurb = ({ title, description, icon }: AboutUsBlurbPropTypes) => {
  return (
    <div className="bg-zinc-800 rounded flex mb-6 py-5 px-10">
      <div className="pr-6">{icon}</div>
      <div className="">
        <div className="font-gillsans font-bold text-xl text-stone-100 pb-3">
          {title}
        </div>
        <div className="text-zinc-300 text-md font-montserrat">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AboutUsBlurb;
