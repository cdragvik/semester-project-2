
import { signout } from "./api/auth/logout.mjs";
import * as listeners from "./handlers/index.mjs"; 
import * as listings from "./listing/index.mjs";



listeners.setRegisterFormListener()
listeners.setLoginFormListener();
listeners.setCreateFormListener();



listings.getAllListings();
listings.getListingById();

signout();

listeners.setUpdateProfileListener();