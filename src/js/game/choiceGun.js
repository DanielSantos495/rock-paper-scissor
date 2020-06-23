const choiceGun = () => {

  const rockId = document.getElementById('rock');
  const paperId = document.getElementById('paper');
  const scissorsId = document.getElementById('scissors');

  let rock = null;
  let paper = null;
  let scissors = null;
  let gun = null;

  function choiceGun(event) {

    console.log(event.path);
    // if (rock1) {
    // }
    rock = event.path[1].id;
    console.log(rock);

  }

  rockId.addEventListener('click', choiceGun);
  paperId.addEventListener('click', choiceGun);
  scissorsId.addEventListener('click', choiceGun);


}

export default choiceGun;