import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const StartHero = ({ gameReset, wins, setWins }) => {
  useEffect(() => {
    gameReset();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full h-[calc(100vh-64px)] overflow-hidden bg-teal-300">
      <h1 className="m-16 text-6xl">ROCK PAPER SCISSOR</h1>
      <div className="flex">
        <img
          className="h-96 filter hue-rotate-[50deg] translate-x-28 translate-y-24 contrast-[200%] -rotate-45"
          src="/Rscissor.png"
        />
        <img src="/Shrek.png" className="z-10" />
        <img
          className="h-96 -translate-x-36 rotate-45 translate-y-24 filter hue-rotate-[50deg] contrast-[200%]"
          src="/Lpaper.png"
        />
      </div>
      <Link
        to="/TheGame"
        className="p-4 m-8 text-6xl bg-teal-600 border-8 border-black rounded-2xl"
      >
        PLAY
      </Link>
    </section>
  );
};
