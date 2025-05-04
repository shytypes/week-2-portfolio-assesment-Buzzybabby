document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm')
  const output = document.getElementById('formOutput')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const firstName = document.getElementById('firstName').value.trim()
    const secondName = document.getElementById('secondName').value.trim()
    const email = document.getElementById('email').value.trim()
    const message = document.getElementById('message').value.trim()

    output.innerHTML = `
      <h3>Form Submission:</h3>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Second Name:</strong> ${secondName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `

    form.reset()
  })
})
