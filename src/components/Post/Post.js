import { Avatar } from "@material-ui/core";
import React from "react";
import "../Post/Post.css";

// Material-ui icons
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post__topInfo">
          <h4>{username}</h4>
          <p>{timestamp}</p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{message}</p>
      </div>
      {image && (
        <div className="post__image">
          <img src={image} alt="URL" />
        </div>
      )}
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon fontSize="small" />
          <p>Like</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutlineIcon fontSize="small" />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <NearMeIcon fontSize="small" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
