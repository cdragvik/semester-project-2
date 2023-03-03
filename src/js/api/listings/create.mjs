import { errorMessage } from "../../error/error.mjs";
import { authFetch } from "../authFetch.mjs";
import { BASE_URL } from "../constants.mjs"

const action = "/listings"

/**
 * Function that sends data to create a new post. 
 * Re-reders the page after sending the data. 
 */

export async function createListing(listingData) {

    try{
        const createListingURL = BASE_URL + action; 

        const response = await authFetch (createListingURL, {
            method: "post",
            body: JSON.stringify(listingData)
        })

        alert("You have created a listing")
        window.location.reload()
        return await response.json();

    } catch(error) {
        errorMessage(); 
    }

}