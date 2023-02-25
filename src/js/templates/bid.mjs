export function bidTemplate(bidData) {
    const readBid = document.createElement("div"); 

    try {
        const loader = document.querySelector(".loader");
        loader.style.display ="none";

        readBid.innerHTML = `
        <div class="card p-3 pb-0 mt-2">
            <p>Bidder: ${bidData.bidderName} </p>
            <p>Amount: ${bidData.amount} </p>
        </div>`; 

        return readBid; 
        
    } catch(error){
        readBid.innerHTML = `<div>Ups! An error has occured. Please try again later.</div>`;
    }
}

export function renderBids(listingBidsList, parent) {
    parent.innerHTML = ""
    listingBidsList.map(bid => parent.append(bidTemplate(bid)));
}