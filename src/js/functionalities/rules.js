const rules = () => {

  const rulesClose = document.getElementById('rules__close');
  const rulesOpen = document.getElementById('rules__button');
  const rulesOverlay = document.getElementById('rules__overlay');
  const rulesModal = document.getElementById('rules__modal');

  function rulesTogle() {

    if (rulesOverlay.classList.contains('is-active-f')) {

      function removeModal(e) {

          rulesOverlay.classList.remove('is-active-f');
          rulesModal.removeEventListener('animationend', removeModal);

      }

      rulesOverlay.classList.add('out');
      rulesModal.classList.add('out');
      rulesModal.addEventListener('animationend', removeModal);

    } else {

      rulesModal.classList.remove('out');
      rulesOverlay.classList.remove('out');
      rulesOverlay.classList.add('is-active-f');

    }
  }

  rulesClose.addEventListener('click', rulesTogle);
  rulesOpen.addEventListener('click', rulesTogle);
}

export default rules;