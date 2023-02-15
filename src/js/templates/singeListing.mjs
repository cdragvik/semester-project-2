export function singleListingTemplate(listingData) {

    
    const readListing = document.createElement("div");
    
    for (let i=0; i < listingData.bids.length; i++) {

        readListing.innerHTML = `
        
        <div class="card m-auto mt-3 col-11 col-md-9 col-lg-6 p-4 d-flex flex-row">

            <div class="p-4 col-6">
                <img src=${listingData?.media} style="max-width:100%;"/>   
            </div>

            <div class="p-4 col-6">

                <div>
                    <h1>${listingData.title}</h1>
                    <p>Seller: ${listingData.seller.name}</p>
                    <p>Description: ${listingData.description}</p>
                    <p>Deadline: ${listingData.endsAt}</p>
                    <p>Number of bids: ${listingData._count.bids}</p>
                    
                </div>
                
                <a href="/bid/index.html?id=${listingData.id}"><button class="btn btn-primary">Bid on item</button></a>
                <hr/>

                <h3>Bids</h3>
                    <div class="card bg-light p-3">
                        <p>Bidder: ${listingData.bids[i].bidderName}</p>
                        <p>Amount: ${listingData.bids[i].amount}</p>
                    </div>

            </div>
        </div>`;

    return readListing;
    }
}

export function renderSingleListing(listingDataList, parent) {
    parent.innerHTML = ""
    parent.append(singleListingTemplate(listingDataList))
}