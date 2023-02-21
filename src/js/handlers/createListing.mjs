import { createListing } from "../api/listings/index.mjs";

export async function setCreateFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries())

      const images = listing.media.split(", ")
      const tags = listing.tags.split(", ")
      
      createListing({...listing, media: images, tags: tags})

    })
  }
}