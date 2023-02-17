import { BASE_URL } from "../../api/constants.mjs"; 
import { authFetch } from "../../api/authFetch.mjs";


const action = "/profiles";


export async function getProfiles() {
        
    const getProfileURL = `${BASE_URL}${action}`;
        
    const response = await authFetch (getProfileURL)
    
    return await response.json(); 
}


export async function getProfile(name) {

    if (!name) {
        throw new Error("Get requires a name");
    }
        
    const getProfileURL = `${BASE_URL}${action}/${name}`;
        
    const response = await authFetch (getProfileURL)
    
    return await response.json(); 
}