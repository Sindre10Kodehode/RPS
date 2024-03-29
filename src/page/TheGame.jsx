import { ChoiceButton } from "../components/components";
import { useState } from "react";

export const TheGame = ({ setWins, wins, setLosses, losses }) => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [pcChoice, setPcChoice] = useState("");
  const [lastChoice, setLastChoice] = useState("");
  const [result, setResult] = useState("");
  const [animating, setAnimating] = useState(false);

  function Win() {
    setWins((wins) => wins + 1);
  }

  function Lose() {
    setLosses((losses) => losses + 1);
  }

  const handleChoice = (choice) => {
    setPlayerChoice(choice);

    const randomNumber = Math.floor(Math.random() * choices.length);
    const pcChoice = choices[randomNumber];
    setPcChoice(pcChoice);
    
    pcChoice === lastChoice ? setPcChoice(choices[randomNumber]):
    WinOrLose(choice, pcChoice);
    setLastChoice(pcChoice)
    
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, 1000);
  };
  
  const choices = ["Rock", "Paper", "Scissor"];
  
  function WinOrLose(playerChoice, pcChoice) {
    let results;
    if (pcChoice === playerChoice) {
      results = "DRAW";
    } else if (playerChoice === "Rock") {
      if (pcChoice === "Paper") {
        results = "YOU LOSE!";
      } else {
        results = "YOU WIN!";
      }
    } else if (playerChoice === "Paper") {
      if (pcChoice === "Scissor") {
        results = "YOU LOSE!";
      } else {
        results = "YOU WIN!";
      }
    } else {
      if (pcChoice === "Rock") {
        results = "YOU LOSE!";
      } else {
        results = "YOU WIN!";
      }
    }
    results === "YOU WIN!" ? Win() : results === "YOU LOSE!" ? Lose() : "DRAW";
    setResult(results);
    console.log("you choose: " + playerChoice);
    console.log("pc choose: " + pcChoice);
    console.log("result:" + result);
  }

  return (
    <main className="flex flex-col justify-between items-center bg-teal-300 h-[calc(100vh-64px)] overflow-hidden">
      <section>
        {/* <button onClick={() => Win()}>+1</button>
          <button onClick={() => Lose()}>-1</button>
          <button onClick={() => computerChoose()}>check computer choice</button>
        <p>{playerChoice}</p>
        <p>{pcChoice}</p> */}
        <div className="flex flex-col items-center text-6xl left-1/2">
          <h1>
            {wins} / {losses}
          </h1>
          <p className="h-[60px]">{animating ? "" : result}</p>
        </div>
        <section className="flex flex-row items-center justify-between w-screen translate-y-1/2 h-72">
          <div className="flex flex-row w-1/3">
            <img src="/head.png" className=" translate-x-44 z-10 h-[500px]" />
            <img
              className={`rotate-45 w-96 ${animating ? "animate-LShoot" : ""}`}
              src={
                playerChoice === "Rock"
                  ? "/Lrock.png"
                  : playerChoice === "Paper"
                  ? "/Lpaper.png"
                  : playerChoice === "Scissor"
                  ? "/Lscissor.png"
                  : null
              }
            />
          </div>
          <div className="flex flex-row-reverse w-1/3 h-96">
            <img className="z-10 h-96 -translate-x-28" src="/Shrek.png" />
            <img
              className={`-rotate-45 w-96 filter hue-rotate-[50deg] contrast-[200%] ${
                animating ? "animate-RShoot" : ""
              }`}
              src={
                pcChoice === "Rock"
                  ? "/Rrock.png"
                  : pcChoice === "Paper"
                  ? "/Rpaper.png"
                  : pcChoice === "Scissor"
                  ? "/Rscissor.png"
                  : null
              }
            />
          </div>
        </section>
      </section>
      <div className="flex items-center flex-col w-[1000px] overflow-hidden bg-teal-500 rounded-t-[50%] pt-11 -bottom-24 ">
        <h1 className="text-3xl">CHOOSE YOUR HAND</h1>
        <div className="overflow-hidden h-[250px]">
          <ChoiceButton
            onClick={() => handleChoice("Rock")}
            href="/Lrock.png"
          />
          <ChoiceButton
            onClick={() => handleChoice("Paper")}
            href="/Lpaper.png"
          />
          <ChoiceButton
            onClick={() => handleChoice("Scissor")}
            href="/Lscissor.png"
          />
        </div>
      </div>
    </main>
  );
};
