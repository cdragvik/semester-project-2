import { authFetch } from "../authFetch.mjs";
import { BASE_URL } from "../constants.mjs";

const action = "/listings";

// Get all listings
// Needs to include tag to display ony wine

export async function readListings() {
        
    const getListingsURL = `${BASE_URL}${action}`;
        
    const response = await authFetch (getListingsURL)
    
    return await response.json(); 
}



// Get specific listing

export async function readListing(id) {

    const getListingURL = `${BASE_URL}${action}/${id}`;
        
    const response = await authFetch (getListingURL)
    
    return await response.json(); 

}