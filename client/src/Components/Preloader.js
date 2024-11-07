import React from "react";
import styled from "styled-components";

function Preloader() {
  return (
    <Wrapper className="preloader" id="preloader">
      {/* <img src="preloader/ripple.svg" alt="preloader"/> */}

      <div className="preloader-section">
        <div id="big-bang">
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
      </div>
    </Wrapper>
  );
}

export default Preloader;

const Wrapper = styled.div`
  position: fixed;

  z-index: 200;

  .preloader-section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #102e37;
    animation: colorAnimate 5s linear infinite;
  }

  @keyframes colorAnimate {
    100% {
      filter: hue-rotate(360deg);
    }
  }

  #preloader {
    position: fixed;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    animation: fadeout 5s ease-out 3s forwards;
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  #big-bang {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(120, 204, 109);
    /* box-shadow: 0 0 20px 10px white; */
    /* opacity: 0;  */
    animation: explode 5s ease-out 3s forwards;
  }

  #big-bang span {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background: inherit;
    border-radius: inherit;
    animation: pulseanimate 3s ease-out 0s 3 forwards,
               fade 5s ease-out 4s forwards;
    animation-delay: calc(1s * var(--i));
  }
  @keyframes fade{
    100% {
      opacity: 0;
    }
  }

  @keyframes pulseanimate {
    100% {
      opacity: 0;
      transform: scale(3);
    }
  }



  @keyframes explode {
    0% {
      box-shadow: 0 0 10px 4px rgb(120, 204, 109);
    }
    30% {
      transform: scale(0.1);
      background-color: white;
      box-shadow: 0 0 20px 4px rgb(120, 204, 109);
    }
    70% {
      transform: scale(300);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
