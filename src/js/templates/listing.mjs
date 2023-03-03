import { errorMessage } from "../error/error.mjs";

export function listingTemplate(listingData) {
    
    const readListing = document.createElement("div"); 
    readListing.classList.add("listings")
    
    try {
        const endsAt = new Date(listingData.endsAt).toLocaleString();
        
        const loader = document.querySelector(".loader");
        loader.style.display ="none";


        readListing.innerHTML = `<div class="card p-3 mb-3">
        <h2>${listingData.title}</h2>
        <img src=${listingData?.media?.[0] ?? "shorturl.at/mnrG"}/>
        <br>
        <p>Ends at: ${endsAt}</p>
        <div><p>Tags: ${listingData.tags}</p></div>
        <p>Number of bids: ${listingData._count.bids}</p>
        <a href="/listing/index.html?id=${listingData.id}"><button class="btn btn-secondary">Read more</button></a>
        </div>`

        return readListing;
    
    } catch(error){
       errorMessage(); 
    }
}

export function renderListingTemplates(listingDataList, parent) {
    parent.innerHTML = ""
    listingDataList.map(data => {
        parent.append(listingTemplate(data))
    })
};