
import { signout } from "./api/auth/logout.mjs";
import * as listeners from "./handlers/index.mjs"; 
import * as listings from "./listing/index.mjs";
import { fillProfileData } from "./profile/fillProfileData.mjs";






listeners.setRegisterFormListener()
listeners.setLoginFormListener();
listeners.setCreateFormListener();
listeners.setSearchFormListener();



listings.getAllListings();
listings.getListingById();

signout();

listeners.setUpdateProfileListener();

fillProfileData();