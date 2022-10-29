import type React from "react";

interface AboutUsBlurbPropTypes {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutUsBlurb = ({ title, description, icon }: AboutUsBlurbPropTypes) => {
  return (
    <div className="bg-zinc-800 rounded flex">
      {icon}
      <div className="">
        <div className="font-gillsans font-bold text-xl text-stone-100 pb-3">
          {title}
        </div>
        <div className="text-zinc-300 text-md">{description}</div>
      </div>
    </div>
  );
};

export default AboutUsBlurb;
