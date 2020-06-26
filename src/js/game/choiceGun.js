const choiceGun = () => {

  const rockId = document.getElementById('rock');
  const paperId = document.getElementById('paper');
  const scissorsId = document.getElementById('scissors');
  // const divFigth = document.getElementById('gameFight');
  // const positionFightMachine = document.getElementById('game-fight__fighter2-position');

  const gameTable = document.getElementById('game__table');
  const game = document.getElementById('game');

  const fightComponent = `

      <div class="game-fight__user">
        <div class="game-fight__user-position" id="game-fight__user">

        </div>
        <p>YOU PICKED</p>
      </div>

      <div class="game-fight__fighter2">
        <div class="game-fight__fighter2-position" id="game-fight__fighter2-position">

        </div>
        <p>THE HOUSE PICKED</p>
      </div>

      <span class="game-results" id="game-results">

      </span>

  `;


  const choiceGunComponent = (gunName ,imgGun, altName) => `

    <span class="${gunName}">
      <span class="game__box-shadow">
          <img src="${imgGun}" alt="${altName}">
      </span>
    </span>

  `;

  const gameResultsComponent = (winOrLose) => `

    <span class="game-results__message">
      ${winOrLose}
    </span>
    <span class="game-play-again id="game-play-again">
        PLAY AGAIN
    </span>
`;

  // let rock = 'rock';
  // let paper = 'paper';
  // let scissors = 'scissors';

  const  renderGameComponents = (componentHTML, nameAttribute, valueAttribute, node) => {

    const div = document.createElement('div');
    div.setAttribute(nameAttribute, valueAttribute);
    div.innerHTML = componentHTML;
    node.append(div);

  }

  const choiceMachineGun = () => Math.floor(Math.random() * 3);

  function gameFight(gunUser) {

    const rock = 0;
    const paper = 1;
    const scissors = 2;
    const positionFightMachine = document.getElementById('game-fight__fighter2-position');
    const positionFightUser = document.getElementById('game-fight__user');
    const gameResults = document.getElementById('game-results');
    const imgRock = '../images/icon-rock.svg';
    const imgPaper = '../images/icon-paper.svg';
    const imgScissors = '../images/icon-scissors.svg';
    const gunMachine = choiceMachineGun();
    const waitOfResponse = 1000;
    console.log(positionFightMachine);
    


    switch(gunUser) {

      case 'rock':
        gunUser = 0;
      break

      case 'paper':
        gunUser = 1;
      break

      case 'scissors':
        gunUser = 2;
      break

    }

    console.log(gunUser, 'User');
    console.log(gunMachine, 'Machine');

    if (gunUser === gunMachine ) {

      let gun;
      let gunImg;
      let imgAlt;

      switch(gunUser) {

        case 0:
          gun = 'game__rock';
        break
        case 1:
          gun = 'game__paper';
        break

        case 2:
          gun = 'game__scissors';
        break

      }

      switch(gunUser) {

        case 0:
          gunImg = imgRock;
        break

        case 1:
          gunImg = imgPaper;
        break

        case 2:
          gunImg = imgScissors;
        break

      }
      switch(gunUser) {

        case 0:
          imgAlt ='Rock';
        break

        case 1:
          imgAlt = 'Paper';
        break

        case 2:
          imgAlt = 'Scissors';
        break

      }
      //User
      renderGameComponents(choiceGunComponent(gun ,gunImg, imgAlt),'id', null, positionFightUser);
      //Machine
      renderGameComponents(choiceGunComponent(gun ,gunImg, imgAlt),'id', null, positionFightMachine);
      renderGameComponents(gameResultsComponent('WE TIE'), 'id', null, gameResults);


      console.log('Empatan');

    } else if (gunUser === rock && gunMachine === scissors) {
      //User
      renderGameComponents(choiceGunComponent('game__rock' ,imgRock, 'Rock'),'id', null, positionFightUser);
      //Machine
      setTimeout(() => {

        renderGameComponents(choiceGunComponent('game__scissors' ,imgScissors, 'Scissors'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU WIN'), 'id', null, gameResults);
        console.log('win User');

      }, waitOfResponse);

    } else if (gunUser === paper && gunMachine === rock) {
      //User
      renderGameComponents(choiceGunComponent('game__paper' ,imgPaper, 'Paper'),'id', null, positionFightUser);
      //Machine
      setTimeout(() => {

        renderGameComponents(choiceGunComponent('game__rock', imgRock, 'Rock'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU WIN'), 'id', null, gameResults);
        console.log('win User');

      }, waitOfResponse);

    } else if (gunUser === scissors && gunMachine === paper) {
      //User
      renderGameComponents(choiceGunComponent('game__scissors' ,imgScissors, 'Scissors'),'id', null, positionFightUser);
      //Machine
      setTimeout(() =>{

        renderGameComponents(choiceGunComponent('game__paper', imgPaper, 'Paper'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU WIN'), 'id', null, gameResults);
        console.log('win User');

      }, waitOfResponse);

    } else if (gunMachine === rock && gunUser === scissors) {
      //User
      renderGameComponents(choiceGunComponent('game__scissors' ,imgScissors, 'Scissors'),'id', null, positionFightUser);
      //Machine
      setTimeout(() => {

        renderGameComponents(choiceGunComponent('game__rock', imgRock, 'Rock'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU LOSE'), 'id', null, gameResults);
        console.log('win Machine, user Lose');

      }, waitOfResponse);

    } else if (gunMachine === paper && gunUser === rock) {
      //User
      renderGameComponents(choiceGunComponent('game__rock' ,imgRock, 'Rock'),'id', null, positionFightUser);
      //Machine
      setTimeout(() => {

        renderGameComponents(choiceGunComponent('game__paper', imgPaper, 'Paper'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU LOSE'), 'id', null, gameResults);
        console.log('win Machine, user Lose');

      }, waitOfResponse);


    } else if (gunMachine === scissors && gunUser === paper) {

      renderGameComponents(choiceGunComponent('game__paper' ,imgPaper, 'Paper'),'id', null, positionFightUser);

      setTimeout(() => {

        renderGameComponents(choiceGunComponent('game__scissors', imgScissors, 'Scissors'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU LOSE'), 'id', null, gameResults);
        console.log('win Machine, user Lose');

      }, waitOfResponse);

    }

    // const playAgain = () => {
  
      const playAgain = document.getElementById('game-play-again');
  
      function reload() {
        reload();
      }
      playAgain.addEventListener('click', reload);
      console.log(playAgain);
    // }
    // playAgain();

  }

  function choiceGun(event) {

    const gun = event.target.id;
    console.log(gun);
    game.remove();
    renderGameComponents(fightComponent, 'class', 'game-fight', gameTable);

    gameFight(gun);


  }



  rockId.addEventListener('click', choiceGun);
  paperId.addEventListener('click', choiceGun);
  scissorsId.addEventListener('click', choiceGun);


}

export default choiceGun;