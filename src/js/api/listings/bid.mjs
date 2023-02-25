import { load, save } from "../../storage/index.mjs";
import { authFetch } from "../authFetch.mjs";
import { BASE_URL } from "../constants.mjs"

const action = "/listings"

const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 

export async function bidOnListing(bidData) {

    const profile = load("profile"); 

    const bidOnListingURL = `${BASE_URL}${action}/${id}/bids`;
    
    const response = await authFetch (bidOnListingURL, {
        method: "post", 
        body: JSON.stringify({amount: +bidData.amount})
    })

    alert("You have bid on a listing")
    window.location.replace("../../../profile")
    save("profile", {...profile, credits: profile.credits - +bidData.amount})
    return await response.json(); 
}