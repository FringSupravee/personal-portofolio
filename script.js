const navBurger = document.getElementById('nav-burger')
const navOptionsContainer = document.getElementById('nav-options-container')

navBurger.addEventListener('click', (e) => {
  navBurger.classList.toggle('change')
  navOptionsContainer.classList.toggle('add-nav')
})
