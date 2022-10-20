const form = document.querySelector('#form')

form.addEventListener('submit', async function (e) {
  e.preventDefault()
  e.stopPropagation()

  const data = {
    name: this.name.value,
    services: this.services.value,
    feedbackType: this['feedback-type'].value,
    account: this.account.value,
    comments: this.comments.value,
  }

  const response = await fetch('http://localhost:8080/api/request', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
})
