const gameResultsComponent = (winOrLose) => `

  <span class="game-results__message">
    ${winOrLose}
  </span>
  <span class="game-play-again" id="play-again">
      PLAY AGAIN
  </span>
`;

export default gameResultsComponent;