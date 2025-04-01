import { useState } from "react";
import SongNode from "./SongNode"; // Import the SongNode class

function Playlist() {
  const [playlist, setPlaylist] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);

  // Add a song to the end
  const addSong = (title, artist) => {
    const newSong = new SongNode(title, artist);
    if (!playlist) {
      setPlaylist(newSong);
      setCurrentSong(newSong);
    } else {
      let temp = playlist;
      while (temp.next) {
        temp = temp.next; // Traverse to end
      }
      temp.next = newSong; // Link last node to new song
    }
  };

  // Skip to next song
  const nextSong = () => {
    if (currentSong?.next) {
      setCurrentSong(currentSong.next);
    }
  };

  return (
    <div>
      <h1>Now Playing: {currentSong?.title || "Empty playlist"}</h1>
      <button onClick={() => addSong("Bohemian Rhapsody", "Queen")}>
        Add Song
      </button>
      <button onClick={nextSong}>Next Song</button>
    </div>
  );
}

export default Playlist;
