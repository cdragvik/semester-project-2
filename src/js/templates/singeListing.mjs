import { errorMessage } from "../error/error.mjs";

export function singleListingTemplate(listingData) {

    const endsAt = new Date(listingData.endsAt).toLocaleString();
    const readListing = document.createElement("div");

    try {

        const loader = document.querySelector(".loader");
        loader.style.display ="none";

        readListing.innerHTML = `<div class="card m-auto mt-3 col-11 col-md-9 col-lg-8 p-4 d-flex flex-row">

            <div class="p-4 col-6">
                <img src=${listingData?.media} style="max-width:100%;"/>   
            </div>

            <div class="p-4 col-6">
                <div>
                    <h2>${listingData.title}</h2>
                    <p>Seller: ${listingData.seller.name}</p>
                    <p>Deadline: ${endsAt}</p>
                    <p>Number of bids: ${listingData._count.bids}</p>
                    <p>Description: ${listingData.description}</p>
                </div>
            </div>
            </div>`;

        return readListing;

    } catch(error) {
        errorMessage(); 
    }

}

export function renderSingleListing(listingDataList, parent) {
    parent.innerHTML = ""
    parent.append(singleListingTemplate(listingDataList))
}