export function listingTemplate(listingData) {

    const endsAt = new Date(listingData.endsAt).toLocaleString();

    const readListing = document.createElement("div"); 
    readListing.innerHTML = `<div class="card p-3 mb-3">
    <h2>${listingData.title}</h2>
    <img src=${listingData?.media}/>
    <br>
    <p>Ends at: ${endsAt}</p>
    <p>Tags: ${listingData.tags}</p>
    <p>Number of bids: ${listingData._count.bids}</p>
    <a href="/listing/index.html?id=${listingData.id}"><button class="btn btn-primary">Read more</button></a>
</div>`

return readListing;
}

export function renderListingTemplates(listingDataList, parent) {
    parent.append(...listingDataList.map(listingTemplate))
};