import { register } from "../api/auth/signup.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#signupForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries())
      
      // Send it to the API
      register(profile)
    })
  }
}