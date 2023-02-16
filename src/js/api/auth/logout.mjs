import * as storage from "../../storage/index.mjs";


export function signout() {
    const signout = document.querySelectorAll("#sign-out");
    signout.forEach((linkElement) => {
      const logout = linkElement;
      logout.addEventListener("click", (event) => {
        event.preventDefault;
        storage.clear();
      });
    });
  }
  