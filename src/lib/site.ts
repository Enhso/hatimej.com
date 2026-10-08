/**
 * Identity of record for the catalog.
 *
 * `email` is the principal's address of record. Pages print it as a link
 * labelled "Email", never as the bare address. Change this one constant to
 * publish a different address; it is the only place the address appears.
 *
 * `links` are the principal's public profiles, printed after the address on the
 * guide card and in the CV's electronic-location field, in this order.
 */
export const SITE = {
    name: "Hatim El Jazouli",
    email: "hatim.eljazouli@proton.me",
    links: [
        { label: "Substack", href: "https://owmeloh.substack.com" },
        { label: "GitHub", href: "https://github.com/Enhso" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/hatim-el-jazouli" },
        { label: "Metaculus", href: "https://www.metaculus.com/accounts/profile/198568/" },
        { label: "X", href: "https://x.com/Le_Hant" },
    ],
    location: "Casablanca",
    description:
        "A catalog of work in formal methods, poetry, forecasting, notes and side quests, indexed by the cross-references between the pieces themselves.",
} as const;
