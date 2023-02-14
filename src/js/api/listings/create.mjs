import { authFetch } from "../authFetch.mjs";
import { BASE_URL } from "../constants.mjs"

const action = "/listings"


export async function createListing(listingData) {

    const createListingURL = BASE_URL + action; 

    const response = await authFetch (createListingURL, {
        method: "post",
        body: JSON.stringify(listingData)
    })

    alert("You have created a listing")
    return await response.json();
}