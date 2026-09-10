/**
 * Identity of record for the catalog.
 *
 * `email` is the principal's address of record, published here because the
 * graduate-admissions audience needs a direct line. Change this one constant to
 * publish a different address; it is the only place the address appears.
 */
export const SITE = {
    name: "Hatim El Jazouli",
    email: "hatim.eljazouli@proton.me",
    location: "Casablanca",
    description:
        "A catalog of work in formal methods, poetry, forecasting and notes, indexed by the cross-references between the pieces themselves.",
} as const;
