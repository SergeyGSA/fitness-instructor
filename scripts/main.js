document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('#burger'),
    navMenu = document.querySelector('#nav-menu'),
    navLinks = document.querySelectorAll('#nav-menu__link'),
    body = document.querySelector('body')

  // Open burger menu
  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navMenu.classList.toggle('active')
    body.classList.toggle('lock')
  })

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
      e.preventDefault()

      // Custom scrolling by page
      const id = e.target.getAttribute('href').replace('#', '')
      window.scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: 'smooth',
      })

      // Close opened menu on small screens
      burger.classList.remove('active')
      navMenu.classList.remove('active')
      body.classList.remove('lock')
    })
  })
})

const form = document.querySelector('#form')
// FIXME: Change fetch to axios
// form.addEventListener('submit', async function (e) {
//   e.preventDefault()

//   const data = {
//     name: this.name.value,
//     services: this.services.value,
//     feedbackType: this['feedback-type'].value,
//     account: this.account.value,
//     comments: this.comments.value,
//   }

//   const response = await fetch('http://localhost:8080/api/request', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// })
