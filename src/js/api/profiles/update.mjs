import { BASE_URL } from "../../api/constants.mjs"; 
import { authFetch } from "../../api/authFetch.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
    
    const updateProfileURL = `${BASE_URL}${action}/${profileData.name}/media`;
    
    const response = await authFetch (updateProfileURL, {
        method,
        body: JSON.stringify(profileData)
    })

    alert("You have successfully updated your avatar!")
    window.location.replace("../../../../profile")
    return await response.json(); 
}