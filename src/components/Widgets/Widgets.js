import React from "react";
import "../Widgets/Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=250&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
        width="250"
        height="500"
        style={{ borderRadius: "3px", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="This is a unique title"
      ></iframe>
    </div>
  );
}

export default Widgets;
