"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Headphones, Maximize2, Music2, Play, Smartphone } from "lucide-react";
import { ecosystemLinks } from "../app/ecosystemLinks.js";

const YOUTUBE_PLAYLIST_ID = "PLgOKbm5kdkuozXVP6TrOJLxJ0Uz3tpQbK";
const FIRST_VIDEO_ID = "WusDnoVlLZ0";
const YOUTUBE_PLAYLIST_URL = "https://www.youtube.com/watch?v=WusDnoVlLZ0&list=PLgOKbm5kdkuozXVP6TrOJLxJ0Uz3tpQbK";

// Add known portrait video IDs here as the playlist grows. Unknown videos default to landscape.
const PORTRAIT_VIDEO_IDS = [];

function getDefaultFrameMode(videoId) {
  return PORTRAIT_VIDEO_IDS.includes(videoId) ? "portrait" : "landscape";
}

export function MusicExperiencePlayer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [frameMode, setFrameMode] = useState(() => getDefaultFrameMode(FIRST_VIDEO_ID));

  const embedUrl = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: "1",
      playsinline: "1",
      rel: "0",
      list: YOUTUBE_PLAYLIST_ID
    });

    return `https://www.youtube.com/embed/${FIRST_VIDEO_ID}?${params.toString()}`;
  }, []);

  return (
    <div className="music-player-card">
      <div className="music-player-topline">
        <span><Music2 size={15} /> Source Signal Music Channel</span>
        <span>Playlist Journey</span>
      </div>

      <div className="music-video-stage" data-frame-mode={frameMode}>
        <div className="youtube-frame-shell">
          {isLoaded ? (
            <iframe
              title="Win Soul of Love music playlist player"
              src={embedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="music-cover-button"
              onClick={() => setIsLoaded(true)}
              aria-label="Play Win Soul of Love music playlist"
            >
              <img
                src={`https://img.youtube.com/vi/${FIRST_VIDEO_ID}/maxresdefault.jpg`}
                alt="Preview thumbnail for the Win Soul of Love music playlist"
                loading="lazy"
              />
              <span className="music-cover-overlay" />
              <span className="music-play-orb">
                <Play size={24} fill="currentColor" />
              </span>
              <span className="music-cover-copy">
                <small>Click to load YouTube</small>
                <strong>Play Win Soul of Love</strong>
              </span>
            </button>
          )}
        </div>
      </div>

      {isLoaded ? (
        <div className="frame-mode-control" aria-label="Video frame mode">
          <button
            type="button"
            className={frameMode === "landscape" ? "active" : ""}
            onClick={() => setFrameMode("landscape")}
          >
            <Maximize2 size={14} /> Landscape
          </button>
          <button
            type="button"
            className={frameMode === "portrait" ? "active" : ""}
            onClick={() => setFrameMode("portrait")}
          >
            <Smartphone size={14} /> Portrait
          </button>
        </div>
      ) : null}

      <div className="music-player-links">
        <a href={YOUTUBE_PLAYLIST_URL} target="_blank" rel="noreferrer noopener">
          Open Playlist <ArrowUpRight size={14} />
        </a>
        <a href={ecosystemLinks.youtube.url} target="_blank" rel="noreferrer noopener">
          YouTube Channel <ArrowUpRight size={14} />
        </a>
      </div>

      <p className="music-player-note">
        <Headphones size={14} />
        The player loads only after interaction, keeping the first visit quiet and lightweight.
      </p>
    </div>
  );
}
