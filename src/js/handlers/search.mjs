import { getListingsBySearch } from "../listing/getListingsBySearch.mjs";

export async function setSearchFormListener() {
    const form = document.querySelector("#search"); 

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const formData = new FormData(event.target);
            const searchObject = Object.fromEntries(formData.entries())
            getListingsBySearch(searchObject.searchInput)
        })
    }

}

setSearchFormListener()