import { bidOnListing } from "../api/listings/bid.mjs";

export async function setBidFormListener() {
    
    const form = document.querySelector("#createBid"); 

    if(form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const form = event.target; 
            const formData = new FormData(form); 
            const bidData = Object.fromEntries(formData.entries())

            bidOnListing(bidData)
        })
    }
}