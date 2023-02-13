import { createListing } from "../api/listings/index.mjs";

export async function setCreateFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries())
      
      // Send it to the API
      createListing(listing)

    })
  }
}