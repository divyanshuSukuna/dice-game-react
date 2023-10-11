/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
import Rules from "../components/Rules.jsx";
import imagesData from "../components/imgData";

function GamePlay(props) {

  const [selectedNumber, setSelectedNumber] = React.useState(null);

  const [showRules, setShowRules] = React.useState(false);

  const [resetScore, setResetScore] = React.useState(false);

  const [totalScore, setTotalScore] = React.useState(0);

  const [imgSrc, setImgSrc] = React.useState("dice1.png");

  function selectNumber(event) {
    let numBtn = event.target;
    setSelectedNumber((prevSelectedNumber) => {
        // Reset styles for the previously selected button
        if (prevSelectedNumber) {
            prevSelectedNumber.style.background = "white";
            prevSelectedNumber.style.color = "black";
        }

        // Set styles for the currently selected button
        numBtn.style.background = "black";
        numBtn.style.color = "white";

        // Get the content of the selected button
        let content = numBtn.textContent;

        // Return the new selected number
        return numBtn;
    });
}


  function  toggleRules() {
    // document.getElementByClassName("show-rules").textContent="Hide Rules"
    const showRulesBtn=document.querySelector(".show-rules")

    setShowRules((prevState) => {
      if(prevState) showRulesBtn.textContent="Show Rules";
      else showRulesBtn.textContent="Hide Rules";

      return !prevState;
    });
    
  }

  function toggleResetScore() {
    setTotalScore(0);
    setSelectedNumber(null);
    setResetScore(prevState => !prevState)

  // Reset styles if a button is selected
  
    selectedNumber.style.background = 'white';
    selectedNumber.style.color = 'black';
  
  }

  function rollDice() {
    let num = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    setImgSrc(imagesData[num-1].src);
    if (parseInt(selectedNumber.textContent) === num) {
      setTotalScore((prevScore) => prevScore + 1);
    }
    else {
      setTotalScore(0)
    }
   
}

  return (
    <>
    <div className="gameplay">
    <div className="warning" style={{ color: selectedNumber === null ? 'red' : 'white' }}>
      <p>You have not selected any number</p>
    </div>
  
    {/* Upper Frame */}
      <div className="upper-frame">
        <div className="score-board">
          <h1>{totalScore}</h1>
          <p>Total Score</p>
        </div>
        <div className="select-num">
          <div className="num-btn">
            <button onClick={selectNumber} className="num-btn-btn">1</button>
            <button onClick={selectNumber} className="num-btn-btn">2</button>
            <button onClick={selectNumber} className="num-btn-btn">3</button>
            <button onClick={selectNumber} className="num-btn-btn">4</button>
            <button onClick={selectNumber} className="num-btn-btn">5</button>
            <button onClick={selectNumber} className="num-btn-btn">6</button>

          </div>
          <p>Select Number</p>
        </div>
      </div>

    {/* Lower Frame */}
     
      <div className="lower-frame">
      <div className="lower-frame-dice">
        <img onClick={rollDice} src={"images/"+imgSrc} alt="" />
        <p>Click on Dice to roll</p>
      </div>
        
      <div className="lower-frame-btn">
        <button onClick={toggleResetScore} className="reset-score">Reset Score</button>
        <button onClick={toggleRules} className="show-rules">Show Rules</button>
      </div>
      </div>
    </div>
    {showRules && <Rules />}
    </>
  )
}

export default GamePlay

