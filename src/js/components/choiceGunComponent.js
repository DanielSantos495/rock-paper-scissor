const choiceGunComponent = (gunName ,imgGun, altName) => `

  <span class="${gunName}">
    <span class="game__box-shadow">
        <img src="${imgGun}" alt="${altName}">
    </span>
  </span>

`;

export default choiceGunComponent;