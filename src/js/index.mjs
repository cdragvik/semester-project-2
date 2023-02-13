
import * as listeners from "./handlers/index.mjs"; 
import * as listings from "./listing/index.mjs";



listeners.setRegisterFormListener()
listeners.setLoginFormListener();
listeners.setCreateFormListener();
listings.getAllListings();

