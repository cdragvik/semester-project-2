import * as templates from "../templates/index.mjs";
import * as listingMethods from "../api/listings/index.mjs"

export async function getListingById() {
    const container = document.querySelector("#listing");
    if (container) {
        const listing = await listingMethods.readListing();
        templates.renderSingleListing(listing, container);
    }
}

getListingById()