export function singleListingTemplate(listingData) {

    const endsAt = new Date(listingData.endsAt).toLocaleString();
    
    const readListing = document.createElement("div");

        readListing.innerHTML = `
        
        <div class="card m-auto mt-3 col-11 col-md-9 col-lg-8 p-4 d-flex flex-row">

            <div class="p-4 col-6">
                <img src=${listingData?.media} style="max-width:100%;"/>   
            </div>

            <div class="p-4 col-6">

                <div>
                    <h1>${listingData.title}</h1>
                    <p>Seller: ${listingData.seller.name}</p>
                    <p>Description: ${listingData.description}</p>
                    <p>Deadline: ${endsAt}</p>
                    <p>Number of bids: ${listingData._count.bids}</p>
                </div>
                
                <a href="/listing/bids/index.html?id=${listingData.id}"><button class="btn btn-primary">View bids</button></a>
                <a href="/listing/bid/index.html?id=${listingData.id}"><button class="btn btn-primary">Bid on item</button></a>
            </div>
        </div>`;

    return readListing;
    }


export function renderSingleListing(listingDataList, parent) {
    parent.innerHTML = ""
    parent.append(singleListingTemplate(listingDataList))
}