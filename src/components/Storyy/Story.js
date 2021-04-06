import React from "react";
import "../Storyy/Story.css";
import { Avatar } from "@material-ui/core";

function Story({ image, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profileSrc} className="story__avatar" />
      <p className="title">{title}</p>
    </div>
  );
}

export default Story;
