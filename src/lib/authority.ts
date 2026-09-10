/**
 * The authority record for the catalog's author.
 *
 * A library keeps one of these for every person it catalogues: the established
 * heading, the variant forms, the fields of activity, and the sources the
 * information was found in. It is a curriculum vitae written by a cataloguer,
 * which is why the CV lives here rather than as an attached document.
 *
 * Field tags follow MARC 21 authority practice closely enough to be honest
 * without pretending to be a valid record. Edit this file to edit the CV.
 *
 * Every entry marked `provisional` prints in the ribbon colour and keeps the
 * "provisional records" stamp on the page until it is replaced with real data.
 */

export interface AuthorityLine {
    /** What the line says. */
    text: string;
    /** Optional date or range, printed in the margin. */
    when?: string;
    /** Marks a line authored during the build, awaiting real information. */
    provisional?: boolean;
    /** Turns the line into a link. */
    href?: string;
}

export interface AuthorityField {
    /** MARC-style tag, printed in the rail. */
    tag: string;
    /** What the tag means, in words. */
    label: string;
    lines: AuthorityLine[];
}

export const AUTHORITY: AuthorityField[] = [
    {
        tag: "100",
        label: "Established heading",
        lines: [{ text: "El Jazouli, Hatim" }],
    },
    {
        tag: "400",
        label: "Variant forms",
        lines: [{ text: "Hatim El Jazouli" }, { text: "H. El Jazouli" }],
    },
    {
        tag: "372",
        label: "Field of activity",
        lines: [
            { text: "Formal methods" },
            { text: "Forecasting and calibration" },
            { text: "Poetry" },
            { text: "Data science" },
        ],
    },
    {
        tag: "370",
        label: "Associated place",
        lines: [{ text: "Casablanca, Morocco" }],
    },
    {
        tag: "373",
        label: "Associated group",
        lines: [
            {
                text: "Replace with institution, programme and dates.",
                provisional: true,
            },
        ],
    },
    {
        tag: "374",
        label: "Occupation",
        lines: [
            {
                text: "Replace with current position and dates.",
                provisional: true,
            },
        ],
    },
    {
        tag: "678",
        label: "Biographical data",
        lines: [
            {
                text: "Replace with education: degree, institution, dates.",
                when: "—",
                provisional: true,
            },
            {
                text: "Replace with a second entry, or delete this line.",
                when: "—",
                provisional: true,
            },
        ],
    },
    {
        tag: "670",
        label: "Source data found",
        lines: [
            {
                text: "Replace with a publication, preprint, talk or dataset, with its venue and date. Delete the line if there is nothing yet; an empty field is honest and a fabricated one is not.",
                provisional: true,
            },
        ],
    },
];
