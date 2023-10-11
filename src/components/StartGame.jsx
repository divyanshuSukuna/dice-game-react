/* eslint-disable react/prop-types */


function StartGame(props) {
  return (
    <>
    <div className="start-page">
        <img src="/images/start-page-icon.png" alt="" />
        <div className="start-page-col">
            <h1>DICE GAME</h1>
            <button onClick={props.toggle} className="play-now-btn">Play Now</button>
        </div>
        
    </div>
    </>
  )
}

export default StartGame
