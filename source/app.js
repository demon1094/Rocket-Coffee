const menuBtn = document.querySelector('.menu-btn')
const navBar = document.querySelector('.navgation')

menuBtn.addEventListener('click', () => {
  let navActive = navBar.classList.contains('active')

  if (navActive) {
    navBar.classList.remove('active')
    menuBtn.classList.remove('active')
  } else {
    navBar.classList.add('active')
    menuBtn.classList.add('active')
  }
})