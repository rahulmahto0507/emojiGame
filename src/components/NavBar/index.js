import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <nav className="nav-bar-container">
      <div className="logo-container">
        <img
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="emoji-logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="para">Score: {currentScore}</p>
          <p className="para">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
