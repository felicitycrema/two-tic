import React, { useContext, useState, useEffect, useRef } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";
import  PlayList  from "../../utils/MusicUtils/PlayList";
import { randomizeIndex } from "../../utils/MusicUtils";
import { PlayIcon, PauseIcon, NextIcon } from "./MusicPlayer.styled";
import { SfxContext } from "../../context/SfxContext";
import { Text } from "../../styles/General.styled";
function MusicPlayer() {
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(PlayList));
  const [playPromise, setPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPromise(promise);
      if(playerRef.current?.volume)
    playerRef.current.volume = 0.1;
      return;
    }
    playerRef.current.pause();
  }, [isPlaying, currentSong]);

  const shuffleHandler = async () => {
        // clickSfx();                 
        await playPromise.then(() => {
        playerRef.current.pause(); 
        setIsPlaying(false);      
    });

    setCurrentSong(randomizeIndex(PlayList));
    setIsPlaying(true);
  };

  const displaySong = PlayList[currentSong].split("/")[2];
  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon
         onClick={() => {
            clickSfx();
            setIsPlaying(false);            
        }}
        onMouseEnter={() => hoverSfx()}
        />
       
      ) : (
        <PlayIcon
          onClick={() => {
            clickSfx();
            setIsPlaying(true);
        }}
            
        onMouseEnter={() => hoverSfx()}
      />
    )}
  
      <NextIcon onClick={shuffleHandler} onMouseEnter={() => hoverSfx()} />
      

      <audio
        ref={playerRef}
        src={PlayList[currentSong]}
        onEnded={shuffleHandler}
      />
      <Text>{displaySong}</Text>
      {/* <p>{playList[currentSong]}</p> */}
    </MusicPlayerWrapper>
  );
}

export default MusicPlayer;
