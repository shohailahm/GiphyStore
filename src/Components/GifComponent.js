import React, { useState } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/solid";

function GifComponent({ url, staticUrl }) {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div className="relative transition-all ease-in-out duration-400">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        {play ? (
          <PauseIcon
            className="h-8 w-8 text-white-500  hover:opacity-100 duration-3000 ease-out opacity-0"
            onClick={handlePlay}
          />
        ) : (
          <PlayIcon className="h-8 w-8 text-white-500" onClick={handlePlay} />
        )}{" "}
      </div>
      <img
        src={play ? url : staticUrl}
        alt={url}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default GifComponent;
