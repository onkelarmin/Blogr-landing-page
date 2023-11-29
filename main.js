const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('#primary-nav')
const navButtons = document.querySelectorAll('.primary-nav__button')
const sublists = document.querySelectorAll('.primary-nav__sublist')

// Primary nav

navToggle.addEventListener('click', () => {
  const isOpen = nav.getAttribute('data-open') === 'true' ? true : false

  if (isOpen) {
    closeNav()
  } else {
    openNav()
  }
})

function openNav() {
  nav.setAttribute('data-open', 'true')
  navToggle.setAttribute('aria-expanded', 'true')
}

function closeNav() {
  nav.setAttribute('data-open', 'false')
  navToggle.setAttribute('aria-expanded', 'false')
}

//  Sublists

document.addEventListener('click', (e) => {
  if (!e.target.closest('.primary-nav')) {
    closeAllSublists()
    return
  }

  const clickedButton = e.target.closest('.primary-nav__button')
  const isOpen =
    clickedButton.getAttribute('aria-expanded') === 'true' ? true : false

  if (isOpen) {
    clickedButton.setAttribute('aria-expanded', 'false')
    clickedButton.parentElement
      .querySelector('.primary-nav__sublist')
      .setAttribute('data-open', 'false')
  } else {
    closeAllSublists()

    clickedButton.setAttribute('aria-expanded', 'true')
    clickedButton.parentElement
      .querySelector('.primary-nav__sublist')
      .setAttribute('data-open', 'true')
  }
})

function closeAllSublists() {
  sublists.forEach((list) => {
    list.setAttribute('data-open', 'false')
  })
  navButtons.forEach((btn) => {
    btn.setAttribute('aria-expanded', 'false')
  })
}
