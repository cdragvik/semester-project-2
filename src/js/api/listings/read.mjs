import { authFetch } from "../authFetch.mjs";
import { BASE_URL } from "../constants.mjs";

const action = "/listings";
const flag = "?_seller=true&_bids=true";
const tags = "_tag=finewine";

// Get all listings
export async function readListings() {
        
    const getListingsURL = `${BASE_URL}${action}?sort=created&sortOrder=desc&${tags}`;
        
    const response = await authFetch (getListingsURL)
    
    return await response.json(); 
}

// Get specific listing
export async function readListing() {

    const queryString = document.location.search; 
    const params = new URLSearchParams(queryString); 
    const id = params.get("id");

    const getListingURL = `${BASE_URL}${action}/${id}${flag}`;
        
    const response = await authFetch (getListingURL)
    
    return await response.json(); 

}

// Get listings by search 
// User is able to search by title
export async function getListingsBySearch(search) {

    const getListingsURL = `${BASE_URL}${action}?sort=created&sortOrder=desc&${tags}`; 

    const response = await authFetch(getListingsURL)

    const result = await response.json(); 

    const lowerCasedSearch = search.toLowerCase()

    let filtered = result.filter(listing => 
        listing.title.toLowerCase().includes(lowerCasedSearch)
    )

    return filtered
}