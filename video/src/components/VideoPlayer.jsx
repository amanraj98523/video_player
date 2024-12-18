import React, { useRef } from "react";
import { scroller } from "react-scroll";

const VideoPlayer = ({ videoUrl, onVideoEnd }) => {
  const iframeRef = useRef();

  const handleVideoEnd = () => {
    if (onVideoEnd) onVideoEnd();
  };

  return (
    <div className="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/aWmUVINkzS8?si=tAC8-X_4DVk0ZJg9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default VideoPlayer;
