import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";
export default function Player() {
  const navigate = useNavigate();

  function fetchMovieVideos() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODY3ZmFiMmIyYmE5OWY4Y2M1OTUyMTM2MTYxNjUxOCIsInN1YiI6IjY0OTMyN2MxYzI4MjNhMDBmZmEwYjA4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gKOrQ1ZNrC8XzfeuiJpvIUj_ZDSrwtuNFdcGReE9b80'
      }
    };
  
    fetch('https://api.themoviedb.org/3/movie/697843/videos?language=en-US', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
  

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
