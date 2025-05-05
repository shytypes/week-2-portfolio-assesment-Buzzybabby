document.addEventListener('DOMContentLoaded', () => {
  // Ensure the form and output elements are being correctly accessed
  const form = document.getElementById('contactForm')
  const output = document.getElementById('formOutput')

  // Add event listener for the form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault() // Prevent the form from submitting the traditional way (page reload)

    // Capture the values from the form fields
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const email = document.getElementById('email').value.trim()
    const message = document.getElementById('message').value.trim()

    // Ensure the captured values are not empty (optional check)
    if (!firstName || !secondName || !email || !message) {
      output.innerHTML = '<p>Please fill in all fields.</p>'
      return // Stop further processing if fields are empty
    }

    // Display the form submission details in the output div
    output.innerHTML = `
      <h3>Form Submission:</h3>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `

    // Optionally, reset the form after submission
    form.reset()
  })
})
