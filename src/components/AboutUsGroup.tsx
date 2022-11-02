import React from "react";
import AboutUsBlurb from "./AboutUsBlurb";
import ComputerIcon from "./icons/ComputerIcon";
import RobotArmIcon from "./icons/RobotArmIcon";
import TutorIcon from "./icons/TutorIcon";
import blurb from "../content/index/blurb.json"


const AboutUsGroup = () => {
  return (
    <div className="font-montserrat">
      <AboutUsBlurb
        title="Live and Remote Tutoring"
        description={blurb.seeWhatPutsYotesLightYearsAhead.liveAndRemoteTutoring}
        icon={<TutorIcon />}
      />
      <AboutUsBlurb
        title="Workshops, Speakers, and Tours"
        description={blurb.seeWhatPutsYotesLightYearsAhead.workshopsSpeakersAndTours}
        icon={<RobotArmIcon />}
      />
      <AboutUsBlurb
        title="State of the Art Hardware"
        description={blurb.seeWhatPutsYotesLightYearsAhead.stateOfTheArtHardware}
        icon={<ComputerIcon />}
      />
    </div>
  );
};

export default AboutUsGroup;
