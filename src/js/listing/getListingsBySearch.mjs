import * as templates from "../templates/index.mjs"; 
import * as listingMethods from "../api/listings/index.mjs"; 

export async function getListingsBySearch(search) {
    const container = document.querySelector("#listings"); 
    if (container) {
        const listings = await listingMethods.getListingsBySearch(search); 
        templates.renderListingTemplates(listings, container); 
    }
}