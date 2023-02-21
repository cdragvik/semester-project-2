import { getProfile, updateProfile } from "../../js/api/profiles/index.mjs";
import { load, remove, save } from "../storage/index.mjs";


export async function setUpdateProfileListener() {
    const form = document.querySelector("#updateProfile");
    
    if (form) {
        const {name, email, credits} = load("profile")
        form.name.value = name; 
        form.email.value = email;

        const button = form.querySelector("button");
        button.disabled = true; 

        const profile = await getProfile(name);
        
        form.avatar.value = profile.avatar;

        button.disabled = false; 

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())

            profile.name = name; 
            profile.email = email; 

            // Update local storage 
            remove("profile")
            save("profile", {...profile, credits})
            
            // Send it to the API
            updateProfile(profile)
            
        });
  }
}