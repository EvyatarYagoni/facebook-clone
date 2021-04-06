import { useEffect, useState } from "react";
import "../Feed/Feed.css";
import StoryReel from "../StoryReel/StoryReel.js";
import MessageSender from "../MessageSender/MessageSender.js";
import Post from "../Post/Post";

// import DB reference
import db from "../../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  //UseEffect - get once the post when web is loaded
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <div className="stories">
        <StoryReel />
      </div>
      <div className="messageSenderFeed">
        <MessageSender />
      </div>

      <div className="posts">
        {posts.map((post) => {
          return (
            <Post
              key={`${post.id}`}
              profilePic={post.data.profilePic}
              username={post.data.username}
              timestamp={new Date(post.data.timestamp?.toDate()).toUTCString()}
              message={post.data.message}
              image={post.data.image}
            />
          );
        })}
      </div>

      {/*messageSender */}
    </div>
  );
};

export default Feed;
