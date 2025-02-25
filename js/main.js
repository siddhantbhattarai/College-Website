/**
 * ISMT British College Website JavaScript
 * Author: Developer
 * Version: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href") !== "#") {
          e.preventDefault()
  
          const targetId = this.getAttribute("href")
          const targetElement = document.querySelector(targetId)
  
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            })
          }
        }
      })
    })
  
    // Navbar background change on scroll
    const navbar = document.querySelector(".navbar")
    if (navbar) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("navbar-scrolled")
        } else {
          navbar.classList.remove("navbar-scrolled")
        }
      })
    }
  
    // Form validation for contact form
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Basic form validation
        let isValid = true
        const name = document.getElementById("name")
        const email = document.getElementById("contactEmail")
        const subject = document.getElementById("subject")
        const message = document.getElementById("contactMessage")
  
        if (!name.value.trim()) {
          isValid = false
          showError(name, "Please enter your name")
        } else {
          removeError(name)
        }
  
        if (!email.value.trim()) {
          isValid = false
          showError(email, "Please enter your email")
        } else if (!isValidEmail(email.value)) {
          isValid = false
          showError(email, "Please enter a valid email")
        } else {
          removeError(email)
        }
  
        if (!subject.value.trim()) {
          isValid = false
          showError(subject, "Please enter a subject")
        } else {
          removeError(subject)
        }
  
        if (!message.value.trim()) {
          isValid = false
          showError(message, "Please enter your message")
        } else {
          removeError(message)
        }
  
        if (isValid) {
          // Simulate form submission
          const submitBtn = contactForm.querySelector('button[type="submit"]')
          const originalText = submitBtn.innerHTML
  
          submitBtn.disabled = true
          submitBtn.innerHTML =
            '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...'
  
          // Simulate API call
          setTimeout(() => {
            submitBtn.innerHTML = originalText
            submitBtn.disabled = false
  
            // Show success message
            const formContainer = contactForm.parentElement
            const successMessage = document.createElement("div")
            successMessage.className = "alert alert-success mt-3"
            successMessage.innerHTML =
              '<i class="fas fa-check-circle me-2"></i> Your message has been sent successfully. We will get back to you soon!'
            formContainer.appendChild(successMessage)
  
            // Reset form
            contactForm.reset()
  
            // Remove success message after 5 seconds
            setTimeout(() => {
              successMessage.remove()
            }, 5000)
          }, 1500)
        }
      })
    }
  
    // Form validation for application form
    const applicationForm = document.getElementById("applicationForm")
    if (applicationForm) {
      applicationForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Basic form validation
        let isValid = true
        const firstName = document.getElementById("firstName")
        const lastName = document.getElementById("lastName")
        const email = document.getElementById("email")
        const phone = document.getElementById("phone")
        const program = document.getElementById("program")
        const education = document.getElementById("education")
        const termsCheck = document.getElementById("termsCheck")
  
        if (!firstName.value.trim()) {
          isValid = false
          showError(firstName, "Please enter your first name")
        } else {
          removeError(firstName)
        }
  
        if (!lastName.value.trim()) {
          isValid = false
          showError(lastName, "Please enter your last name")
        } else {
          removeError(lastName)
        }
  
        if (!email.value.trim()) {
          isValid = false
          showError(email, "Please enter your email")
        } else if (!isValidEmail(email.value)) {
          isValid = false
          showError(email, "Please enter a valid email")
        } else {
          removeError(email)
        }
  
        if (!phone.value.trim()) {
          isValid = false
          showError(phone, "Please enter your phone number")
        } else {
          removeError(phone)
        }
  
        if (!program.value) {
          isValid = false
          showError(program, "Please select a program")
        } else {
          removeError(program)
        }
  
        if (!education.value) {
          isValid = false
          showError(education, "Please select your education level")
        } else {
          removeError(education)
        }
  
        if (!termsCheck.checked) {
          isValid = false
          showError(termsCheck, "You must agree to the terms and conditions")
        } else {
          removeError(termsCheck)
        }
  
        if (isValid) {
          // Simulate form submission
          const submitBtn = applicationForm.querySelector('button[type="submit"]')
          const originalText = submitBtn.innerHTML
  
          submitBtn.disabled = true
          submitBtn.innerHTML =
            '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...'
  
          // Simulate API call
          setTimeout(() => {
            submitBtn.innerHTML = originalText
            submitBtn.disabled = false
  
            // Show success message
            const formContainer = applicationForm.parentElement
            const successMessage = document.createElement("div")
            successMessage.className = "alert alert-success mt-3"
            successMessage.innerHTML =
              '<i class="fas fa-check-circle me-2"></i> Your application has been submitted successfully. Our admissions team will contact you shortly!'
            formContainer.appendChild(successMessage)
  
            // Reset form
            applicationForm.reset()
  
            // Remove success message after 5 seconds
            setTimeout(() => {
              successMessage.remove()
            }, 5000)
          }, 1500)
        }
      })
    }
  
    // Course modal dynamic content
    const courseModals = document.querySelectorAll('[id^="courseModal"]')
    if (courseModals.length > 0) {
      courseModals.forEach((modal) => {
        modal.addEventListener("show.bs.modal", (event) => {
          const button = event.relatedTarget
          // You can fetch course details dynamically here if needed
        })
      })
    }
  
    // Helper functions
    function showError(input, message) {
      const formControl = input.parentElement
      const errorElement = formControl.querySelector(".invalid-feedback") || document.createElement("div")
  
      errorElement.className = "invalid-feedback"
      errorElement.innerText = message
  
      if (!formControl.querySelector(".invalid-feedback")) {
        formControl.appendChild(errorElement)
      }
  
      input.classList.add("is-invalid")
    }
  
    function removeError(input) {
      input.classList.remove("is-invalid")
      const errorElement = input.parentElement.querySelector(".invalid-feedback")
      if (errorElement) {
        errorElement.remove()
      }
    }
  
    function isValidEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  
    // Counter animation for statistics
    const counters = document.querySelectorAll(".counter")
    if (counters.length > 0) {
      const options = {
        threshold: 0.5,
      }
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target
            const target = Number.parseInt(counter.getAttribute("data-target"))
            let count = 0
            const updateCounter = () => {
              const increment = target / 100
              if (count < target) {
                count += increment
                counter.innerText = Math.ceil(count)
                setTimeout(updateCounter, 10)
              } else {
                counter.innerText = target
              }
            }
            updateCounter()
            observer.unobserve(counter)
          }
        })
      }, options)
  
      counters.forEach((counter) => {
        observer.observe(counter)
      })
    }
  })
  
  