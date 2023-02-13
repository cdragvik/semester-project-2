export function listingTemplate(listingData) {


    const readListing = document.createElement("div"); 
    readListing.innerHTML = `<div class="card p-3 mb-3">
    <h2>${listingData.title}</h2>
    <img src=${listingData?.media}/>
    <br>
    <p>Ends at: ${listingData.endsAt}</p>
    <p>Tags: ${listingData.tags}</p>
    <button class="btn btn-primary">Read more</button>
</div>`

return readListing;
}


export function renderListingTemplate(listingData, parent) {
    parent.append(listingTemplate(listingData))

}

export function renderListingTemplates(listingDataList, parent) {
    parent.append(...listingDataList.map(listingTemplate))
};