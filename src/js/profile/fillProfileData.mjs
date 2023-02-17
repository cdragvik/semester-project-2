import { load } from "../storage/index.mjs";

export function fillProfileData() {

    const profile = load("profile")

    const profileNameContainer = document.querySelector("#userName");
    if (profileNameContainer) {
        const name = profile.name
        profileNameContainer.append(name)
    }

    const profileCreditContainer = document.querySelector("#userCredit");
    if (profileCreditContainer) {
        const credit = profile.credits
        profileCreditContainer.append(credit)
    }

    const profileAvatarContainer = document.querySelector("#userAvatar");
    if (profileAvatarContainer) {
        const avatar = profile.avatar
        profileAvatarContainer.append(avatar)
    }

}