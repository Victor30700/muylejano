import { useState, useRef } from "react";

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={togglePlay}
        className="px-3 py-1 bg-blue-500 text-white rounded-lg"
      >
        {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
      </button>
      <audio ref={audioRef} src={src} preload="auto" />
    </div>
  );
}
