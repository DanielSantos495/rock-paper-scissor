const rules = () => {

  const rulesClose = document.getElementById('rules__close');
  const rulesOpen = document.getElementById('rules__button');
  const rulesOverlay = document.getElementById('rules__overlay');

  function rulesTogle() {

    if (rulesOverlay.classList.contains('is-active-f')) {

      rulesOverlay.classList.remove('is-active-f');

    } else {

      rulesOverlay.classList.add('is-active-f');

    }
  }

  rulesClose.addEventListener('click', rulesTogle);
  rulesOpen.addEventListener('click', rulesTogle);
}

export default rules;