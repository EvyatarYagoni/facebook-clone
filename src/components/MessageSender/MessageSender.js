import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "../MessageSender/MessageSender.css";
import IconButton from "@material-ui/core/IconButton";

// Material-ui icon
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MoodIcon from "@material-ui/icons/Mood";
import AddCircleIcon from "@material-ui/icons/AddCircle";
//Redux
import { useSelector } from "react-redux";
//Firebase DB
import db from "../../firebase";
import firebase from "firebase";

function MessageSender() {
  const [messageSender, setMessageSender] = useState("");
  const [imgURL, setimgURL] = useState("");
  //Redux store - get user image
  const userN = useSelector((state) => state.isLogged);
  const userImg = userN.user.photoURL;

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: messageSender,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: userN.user.photoURL,
      username: userN.user.displayName,
      image: imgURL,
    });

    setMessageSender("");
    setimgURL("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar className="mr-8 messageSender__top__avatar" src={userImg} />
        <form action="">
          <input
            className="messageSender__input mr-35"
            type="text"
            placeholder={`What's on your mind ?`}
            value={messageSender}
            onChange={(e) => {
              setMessageSender(e.target.value);
            }}
          />
          <input
            className="messageSender__input-img-url mr-8"
            type="text"
            placeholder={"Image URL (optional)"}
            value={imgURL}
            onChange={(e) => {
              setimgURL(e.target.value);
            }}
          />
          <span className="btn-form" onClick={handleSubmit}>
            <button
              className="submit-btn"
              type="submit"
              // onClick={handleSubmit}
            ></button>
            <IconButton className="addIconBtn">
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </span>

          {/* <span className="submit-btn" onClick={handleSubmit}>
            <IconButton className="addIconBtn">
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </span> */}
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon className="video-icon mr-8" fontSize="large" />
          <p className="option-name">Live Video</p>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon
            className="photoLibrary-icon mr-8"
            fontSize="large"
          />
          <p className="option-name">Photo/Video</p>
        </div>
        <div className="messageSender__option">
          <MoodIcon className="mood-icon mr-8" fontSize="large" />
          <p className="option-name">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
