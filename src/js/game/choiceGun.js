import fightComponent from '../components/fightComponent';
import choiceGunComponent from '../components/choiceGunComponent';
import gameResultsComponent from '../components/gameResultsComponent';
import scoreComponent from '../components/scoreComponent';

const choiceGun = () => {

  const rockId = document.getElementById('rock');
  const paperId = document.getElementById('paper');
  const scissorsId = document.getElementById('scissors');
  const headerScoreId = document.getElementById('header__score');
  const gameTable = document.getElementById('game__table');
  const game = document.getElementById('game');
  const scoreStorage = parseInt(localStorage.getItem('score'));

  let score = 0;

  const saveStorage = (storage) => {
    localStorage.setItem('score', storage);
  };
  saveStorage(score);

  const scoreCount = (() => {

    score = scoreStorage + score;

  })()


  //Function render components
  const  renderGameComponents = (componentHTML, nameAttribute, valueAttribute, node) => {

    const div = document.createElement('div');
    div.setAttribute(nameAttribute, valueAttribute);
    div.innerHTML = componentHTML;
    node.append(div);

  }

  onload = () => {

    renderGameComponents(scoreComponent(score), 'id', null, headerScoreId);

  }
  //Choice random of Machine
  const choiceMachineGun = () => Math.floor(Math.random() * 3);
  //Function to logic Game
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
    //Page reload for Play Again
    const playAgain = () => {

      const playAgain = document.getElementById('play-again');

      function reload() {

        location.reload();

      }

      playAgain.addEventListener('click', reload);

    }


    //Switch input of users to number for de logic of game
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
    //Validate Guns
    if (gunUser === gunMachine ) {

      let gun;
      let gunImg;
      let imgAlt;
      //Switch values for players tie
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
      playAgain();
      console.log('Empatan');

    } else if (gunUser === rock && gunMachine === scissors) {
      //User
      renderGameComponents(choiceGunComponent('game__rock' ,imgRock, 'Rock'),'id', null, positionFightUser);
      //Machine
      setTimeout(() => {

        renderGameComponents(choiceGunComponent('game__scissors' ,imgScissors, 'Scissors'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU WIN'), 'id', null, gameResults);
        score++;
        saveStorage(score);
        playAgain();
        console.log('win User');

      }, waitOfResponse);

    } else if (gunUser === paper && gunMachine === rock) {
      //User
      renderGameComponents(choiceGunComponent('game__paper' ,imgPaper, 'Paper'),'id', null, positionFightUser);
      //Machine
      setTimeout(() => {

        renderGameComponents(choiceGunComponent('game__rock', imgRock, 'Rock'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU WIN'), 'id', null, gameResults);
        score++;
        saveStorage(score);
        playAgain();
        console.log('win User');

      }, waitOfResponse);

    } else if (gunUser === scissors && gunMachine === paper) {
      //User
      renderGameComponents(choiceGunComponent('game__scissors' ,imgScissors, 'Scissors'),'id', null, positionFightUser);
      //Machine
      setTimeout(() =>{

        renderGameComponents(choiceGunComponent('game__paper', imgPaper, 'Paper'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU WIN'), 'id', null, gameResults);
        score++;
        saveStorage(score);
        playAgain();
        console.log('win User');

      }, waitOfResponse);

    } else if (gunMachine === rock && gunUser === scissors) {
      //User
      renderGameComponents(choiceGunComponent('game__scissors' ,imgScissors, 'Scissors'),'id', null, positionFightUser);
      //Machine
      setTimeout(() => {

        renderGameComponents(choiceGunComponent('game__rock', imgRock, 'Rock'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU LOSE'), 'id', null, gameResults);
        score--;
        saveStorage(score);
        playAgain();
        console.log('win Machine, user Lose');

      }, waitOfResponse);

    } else if (gunMachine === paper && gunUser === rock) {
      //User
      renderGameComponents(choiceGunComponent('game__rock' ,imgRock, 'Rock'),'id', null, positionFightUser);
      //Machine
      setTimeout(() => {

        renderGameComponents(choiceGunComponent('game__paper', imgPaper, 'Paper'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU LOSE'), 'id', null, gameResults);
        score--;
        saveStorage(score);
        playAgain();
        console.log('win Machine, user Lose');

      }, waitOfResponse);


    } else if (gunMachine === scissors && gunUser === paper) {

      renderGameComponents(choiceGunComponent('game__paper' ,imgPaper, 'Paper'),'id', null, positionFightUser);

      setTimeout(() => {

        renderGameComponents(choiceGunComponent('game__scissors', imgScissors, 'Scissors'),'id', null, positionFightMachine), waitOfResponse
        renderGameComponents(gameResultsComponent('YOU LOSE'), 'id', null, gameResults);
        score--;
        saveStorage(score);
        playAgain();
        console.log('win Machine, user Lose');

      }, waitOfResponse);

    }

    saveStorage(score);
    console.log('puntos:',score);

  }
  //Function Start Game
  function startGame(event) {

    const gun = event.target.id;
    console.log(gun);
    game.remove();
    renderGameComponents(fightComponent, 'class', 'game-fight', gameTable);
    gameFight(gun);

  }

  rockId.addEventListener('click', startGame);
  paperId.addEventListener('click', startGame);
  scissorsId.addEventListener('click', startGame);

}

export default choiceGun;