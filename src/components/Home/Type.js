import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer 🚀",
          "Competitive Programmer 👨‍💻",
          "MERN Stack Developer 💻",
          "Android Developer 📲",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
