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

  `;


  const choiceGunComponent = (gunName ,imgGun, altName) => `

    <span class="${gunName}">
      <span class="game__box-shadow">
          <img src="${imgGun}" alt="${altName}">
      </span>
    </span>

  `;

  // let rock = 'rock';
  // let paper = 'paper';
  // let scissors = 'scissors';

  function renderGameComponents(componentHTML, nameAttribute, valueAttribute, node) {

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

      console.log('Empatan');

    } else if (gunUser === rock && gunMachine === scissors) {
      //User
      renderGameComponents(choiceGunComponent('game__rock' ,imgRock, 'Rock'),'id', null, positionFightUser);
      //Machine
      setTimeout(() =>
        renderGameComponents(choiceGunComponent('game__scissors' ,imgScissors, 'Scissors'),'id', null, positionFightMachine), waitOfResponse);
      console.log('win User');

    } else if (gunUser === paper && gunMachine === rock) {
      //User
      renderGameComponents(choiceGunComponent('game__paper' ,imgPaper, 'Paper'),'id', null, positionFightUser);
      //Machine
      setTimeout(() =>
        renderGameComponents(choiceGunComponent('game__rock', imgRock, 'Rock'),'id', null, positionFightMachine), waitOfResponse);
      console.log('win User');

    } else if (gunUser === scissors && gunMachine === paper) {
      //User
      renderGameComponents(choiceGunComponent('game__scissors' ,imgScissors, 'Scissors'),'id', null, positionFightUser);
      //Machine
      setTimeout(() =>
        renderGameComponents(choiceGunComponent('game__paper', imgPaper, 'Paper'),'id', null, positionFightMachine), waitOfResponse);
      console.log('win User');

    } else if (gunMachine === rock && gunUser === scissors) {
      //User
      renderGameComponents(choiceGunComponent('game__scissors' ,imgScissors, 'Scissors'),'id', null, positionFightUser);
      //Machine
      setTimeout(() =>
        renderGameComponents(choiceGunComponent('game__rock', imgRock, 'Rock'),'id', null, positionFightMachine), waitOfResponse);
      console.log('win Machine, user Lose');

    } else if (gunMachine === paper && gunUser === rock) {
      //User
      renderGameComponents(choiceGunComponent('game__rock' ,imgRock, 'Rock'),'id', null, positionFightUser);
      //Machine
      setTimeout(() =>
        renderGameComponents(choiceGunComponent('game__paper', imgPaper, 'Paper'),'id', null, positionFightMachine), waitOfResponse);
      console.log('win Machine, user Lose');


    } else if (gunMachine === scissors && gunUser === paper) {

      renderGameComponents(choiceGunComponent('game__paper' ,imgPaper, 'Paper'),'id', null, positionFightUser);
      setTimeout(() =>
        renderGameComponents(choiceGunComponent('game__scissors', imgScissors, 'Scissors'),'id', null, positionFightMachine), waitOfResponse);
      console.log('win Machine, user Lose');

    }


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