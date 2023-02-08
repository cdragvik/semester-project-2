import { login } from "../api/auth/login.mjs";
import { save } from "../storage/index.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries())

      save("profile", profile)
      
      // Send it to the API
      login(profile)
    })
  }
}