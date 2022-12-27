import { FC, useState, useRef, useEffect } from "react";
import {
  HiOutlineSpeakerWave,
  HiOutlineSpeakerXMark,
  HiPause,
} from "react-icons/hi2";
import { FiSkipForward, FiSkipBack, FiPlay } from "react-icons/fi";
import { MdOutlineReplay } from "react-icons/md";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img4.jpg";
import image5 from "../../assets/img5.jpeg";
import image6 from "../../assets/img6.jpeg";
import image7 from "../../assets/img7.jpg";

// @ts-ignore
import music from "../../assets/music/songs.mp3";
// @ts-ignore
import musics from "../../assets/music/song.mp3";

import { SiApplemusic } from "react-icons/si";

const Player: FC = () => {
  // Music file
  const allMusic = [
    {
      title: "first song",
      src: music,
      artist: "Austine Emmanuel",
      img: image1,
      singer: "1",
    },
    {
      title: "second song",
      src: musics,
      artist: "Austine Emmanuel",
      img: image2,
      singer: "2",
    },
    {
      title: "third song",
      src: music,
      artist: "Austine Emmanuel",
      img: image3,
      singer: "3",
    },
    {
      title: "fourth song",
      src: musics,
      artist: "Austine Emmanuel",
      img: image4,
      singer: "4",
    },
    {
      title: "fifth song",
      src: music,
      artist: "Austine Emmanuel",
      img: image5,
      singer: "5",
    },
    {
      title: "sixth song",
      src: musics,
      artist: "Austine Emmanuel",
      img: image6,
      singer: "6",
    },
    {
      title: "seventh song",
      src: music,
      artist: "Austine Emmanuel",
      img: image7,
      singer: "7",
    },
  ];

  // states
  const [songIndex, setSongIndex] = useState<number>(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showSpeaker, setShowSpeaker] = useState(true);
  const [showPlayPause, setShowPlayPause] = useState(true);
  const [speaker, setSpeaker] = useState<number>(50);

  const { title, src, artist, img, singer } = allMusic[songIndex];

  const audioTag = useRef(new Audio(src));

  const [trackProgress, setTrackProgress] = useState<number>(0);

  const { duration } = audioTag.current;

  // music player button Control
  const handleBack = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log("back");
    if (songIndex - 1 < 0) {
      setSongIndex(allMusic.length - 1);
    } else {
      setSongIndex(songIndex - 1);
    }
  };
  const handlePlay = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // useEffect(() => {
    if (!isPlaying) {
      console.log("play");
      audioTag.current.play();
      setIsPlaying(true);
      console.log(audioTag.current.currentTime * (trackProgress / 100));

      setShowPlayPause(false);
    } else {
      console.log("pause");
      audioTag.current.pause();
      setIsPlaying(false);
      console.log(audioTag.current.currentTime * (trackProgress / 100));
      console.log(duration);

      setShowPlayPause(true);
    }
    // }, [isPlaying]);
  };

  const handleNext = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log("next");
    if (songIndex < allMusic.length - 1) {
      setSongIndex(songIndex + 1);
    } else {
      setSongIndex(0);
    }
  };

  // useEffect(() => {
  //   setSongIndex(() => {
  //     if (trackProgress + 1 > allMusic.length - 1) {
  //       return 0;
  //     } else {
  //       return trackProgress + 1;
  //     }
  //   });
  // }, [trackProgress]);

  const handleMute = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (speaker > 0) {
      setSpeaker(Number(0));
      setShowSpeaker(false);
    } else {
      setSpeaker(Number(50));
      setShowSpeaker(true);
    }
  };

  const handleAuto = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log("auto");
  };
  const volumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSpeaker(Number(event.target.value));
  };
  const changeDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (duration) {
      setTrackProgress(audioTag.current.currentTime * (trackProgress / 100));
    }
    setTrackProgress(Number(event.target.value));
  };

  return (
    <>
      <div className="grid place-items-center h-[95vh]">
        <div className="player relative flex flex-col lg:flex-row min-h-[90vh] w-full lg:h-4/5 lg:w-4/5 items-center justify-center bg-gradient-to-r from-[#5D6D7E] to-[#566573]">
          <div className="logo flex items-center absolute top-2.5 left-[30px] text-[#ccc]">
            <SiApplemusic size={32} className="mr-2" /> Music
          </div>

          {/* Left Side */}
          <div className="left relative py-6 lg:p-0 lg:h-full w-4/5 lg:w-1/2 flex items-center justify-center flex-col">
            <img
              src={img}
              alt="current music album"
              srcSet=""
              className=" h-[350px] lg:h-[300px] min-w-[90%] shadow-[1px_0px_20px_12px_rgba(240,240,240,0.2)]  lg:w-4/5 rounded-2xl"
            />
            <div className="volume lg:absolute hidden bottom-[10%] lg:left-0 w-full lg:flex h-[30px] items-center justify-center text-[#fff]">
              <p className="volumeRange text-[15px] mx-1.5 px-2 py-1">
                {speaker}
              </p>
              <button
                className="py-1 px-2 bg-[#ff8a65] items-center rounded-md cursor-pointer"
                onClick={handleMute}
              >
                {showSpeaker ? (
                  <HiOutlineSpeakerWave size={24} />
                ) : (
                  <HiOutlineSpeakerXMark size={24} />
                )}
              </button>
              <input
                type="range"
                className="lg:w-1/2 w-1/5 outline-none h-0.5 mx-4 cursor-pointer hover:bg-[#ff8a65]"
                name="volume"
                id=""
                value={speaker}
                onChange={volumeChange}
                max={100}
                min={0}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="right relative h-full w-1/2 flex items-center justify-center flex-col">
            <div className="song_Num top-[76px] fixed lg:absolute flex items-center justify-center right-2.5 lg:top-2.5 py-1 px-2.5 text-base text-white rounded-md bg-[rgba(255,255,255,0.2)]">
              <span className="current mr-1">{singer}</span>
              <span className="">/</span>
              <span className="total ml-1">{allMusic.length}</span>
            </div>

            <div className="">
              <div className="songTitle lg:absolute fixed top-[88px] md:top-[80px] left-auto lg:top-[60px] lg:left-1/2 -translate-x-1/2 lg:uppercase text-white text-sm lg:text-3xl first-letter:uppercase">
                {title}
              </div>
              <div className="artisteName lg:absolute fixed top-[104px] md:top-[100px] lg:top-[110px] left-auto lg:left-1/2 -translate-x-1/2 lg:uppercase text-white text-sm lg:text-base">
                {artist}
              </div>
            </div>
            {/* <div className="players">
              <audio
                src={music}
                ref={audioTag}
              ></audio>
            </div> */}

            <div className="buttonControl w-full flex items-center justify-center">
              <button
                className="prev mx-2.5 py-2.5 px-3 rounded-full border-none bg-[#f5f5f51a] text-white hover:bg-[#ff8a65] flex h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] items-center justify-center cursor-pointer outline-none"
                aria-label="previous"
                onClick={handleBack}
              >
                <FiSkipBack />
              </button>

              <button
                className="play mx-2.5 py-2.5 px-3 rounded-full border-none bg-[#ff8a65] hover:bg-[ff8a65] text-white flex h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] items-center justify-center cursor-pointer outline-none"
                onClick={handlePlay}
              >
                {showPlayPause ? (
                  <FiPlay aria-label="play" />
                ) : (
                  <HiPause aria-label="pause" />
                )}
              </button>

              <button
                className="next mx-2.5 py-2.5 px-3 rounded-full border-none bg-[#f5f5f51a] text-white hover:bg-[#ff8a65] flex h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] items-center justify-center cursor-pointer outline-none"
                aria-label="next"
                onClick={handleNext}
              >
                <FiSkipForward />
              </button>
            </div>

            <div className="duration absolute bottom-[100%] left-auto lg:bottom-[20%] lg:translate-x-[-50%] lg:left-1/2 flex items-center justify-center w-full h-5 mt-10">
              <input
                type="range"
                className="w-full lg:w-1/2 outline-none h-0.5 mx-4 cursor-pointer"
                name=""
                step={1}
                id=""
                value={trackProgress}
                onChange={changeDuration}
                max={duration ? duration : `${duration}`}
                min={0}
              />
            </div>

            <div className="autoPlay">
              <button
                className="auto text-lg cursor-pointer border-none outline-none text-white bg-[#f5f5f51a] hidden lg:flex items-center mt-10 py-2.5 px-4 justify-center rounded-xl mx-2.5"
                onClick={handleAuto}
              >
                Autoplay{" "}
                <MdOutlineReplay className="ml-2 items-center justify-center" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
