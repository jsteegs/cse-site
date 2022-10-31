import React from "react";
import AboutUsBlurb from "./AboutUsBlurb";
import ComputerIcon from "./icons/ComputerIcon";
import RobotArmIcon from "./icons/RobotArmIcon";
import TutorIcon from "./icons/TutorIcon";

const AboutUsGroup = () => {
  return (
    <div className="font-montserrat">
      <AboutUsBlurb
        title="Live and Remote Tutoring"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sollicitudin tempor."
        icon={<TutorIcon />}
      />
      <AboutUsBlurb
        title="Workshops, Speakers, and Tours"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sollicitudin tempor."
        icon={<RobotArmIcon />}
      />
      <AboutUsBlurb
        title="State of the Art Hardware"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sollicitudin tempor."
        icon={<ComputerIcon />}
      />
    </div>
  );
};

export default AboutUsGroup;
