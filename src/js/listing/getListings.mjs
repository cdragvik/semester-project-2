import * as listingMethods from "../api/listings/index.mjs"
import * as templates from "../templates/index.mjs"; 



export async function getAllListings() {
    const container = document.querySelector("#listings");
    if (container) {
        const listings = await listingMethods.readListings();
        templates.renderListingTemplates(listings, container);
    }
}

getAllListings()