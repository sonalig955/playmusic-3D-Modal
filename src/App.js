import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import wave from "./assets/wave.mp4"

export default function App() {
  const [playAnimation, setPlayAnimation] = useState(false);


  useEffect(() => {
    setPlayAnimation(true);
  }, []);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true); // Start animation on page load
  }, []);
  return (
    <div style={{
      width: "100%",
      height: "100%",
      minHeight: "100vh",
      background: "radial-gradient(circle, gray, black)",
      overflow: "hidden"
    }}>
      <div
        style={{
          width: "100%",
          height: "66px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",

        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            color: "white",
            fontSize: "18px",
          }}
        >
          <div
            style={{
              width: "29.3px",
              height: "29.3px",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          ></div>
          <div
            style={{
              width: "18.4px",
              height: "29.3px",
              borderTopRightRadius: "100%",
              borderBottomRightRadius: "100%",
              backgroundColor: "white",
              marginRight: "8px",
            }}
          ></div>
          Play Music
        </div>
        <div style={{ color: "white", textDecoration: "underline" }}>HOME</div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          marginTop: "64px",
        }}
      >
        {/* Title Section */}
        <div
          style={{
            position: "relative",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            height: "auto",
            fontSize: "7vw",
            transform: "scaleY(1.40)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Outlined Text */}
          <p
            style={{
              position: "absolute",
              color: "transparent",
              WebkitTextStroke: "2px white",
              fontSize: "7vw",
              fontWeight: "bold",
            }}
          >
            WAVE
          </p>

          {/* Animated Clipped Text */}
          <p
            style={{
              color: "#ffffff",
              position: "absolute",
              fontWeight: "bold",
            }}
            className={animation ? "animate-wave" : ""}
          >
            WAVE
          </p>
        </div>

        {/* Subtitle Section */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "26px",
          }}
        // className='subsection'
        >
          <h2
            style={{
              color: "white",
              fontSize: "3vw",
              textAlign: "center",
              fontFamily: "Wix",
              // marginTop: "32px",
              transform: "scaleX(1.13)",
            }}
            className="cssanimation sequence fadeInBottom subsection"
          >
            High Fidelity Music Streaming
          </h2>

          {/* Animated Line */}
          <motion.div
            style={{
              borderTop: "2px solid white",
              width: 0,
              height: 0,
            }}
            initial={{ width: 0 }}
            animate={playAnimation ? { width: "30%" } : {}}
            transition={{ duration: 1.2, ease: "easeIn", delay: 1 }}
          />
        </div>

        {/* Description */}
        <div
          style={{
            textAlign: "center",
            fontFamily: "Wix",
            marginTop: "12px",
            color: "white",
            fontWeight: "500",
            fontSize: "clamp(14px, 1.1vw, 17px)",
            maxWidth: "80%",
            lineHeight: "1.4",
            // border: "2px solid white",
          }}
          className="cssanimation sequence fadeInBottom description"
        >
          Elevate your audio experience with lossless audio and more.
          <br />
          Join for &#x20B9;499 / per month. Subscription renews at applicable tier price.
        </div>


        {/* Buttons */}
        <div className="flex justify-center items-center w-full mt-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "10px"
          }}>
          <div className="button-container">
            <button className="blue cssanimation sequence fadeInBottom " style={{ fontSize: "16px", fontWeight: 500, cursor: "pointer" }}>Join Now</button>
            <button className="black cssanimation sequence fadeInBottom " style={{ fontSize: "16px", fontWeight: 500, cursor: "pointer" }}>Explore</button>
          </div>
        </div>

      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",

          height: "50vh",

        }}
      >
        <Spline
          scene="https://prod.spline.design/pcjCkhWnlaNlBBOn/scene.splinecode"
          style={{
            width: "100%",
            height: "100%", // Makes sure Spline takes full height
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
      <footer style={{
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "10px"
      }}>@2025 Made with ❤️ by Sonali Gupta</footer>

    </div>
  );
}

