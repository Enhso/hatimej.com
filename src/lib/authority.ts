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
        lines: [{ text: "El Jazouli, Hatim, 1996–" }],
    },
    {
        tag: "400",
        label: "Variant forms",
        lines: [{ text: "Hatim El Jazouli" }, { text: "H. El Jazouli" }],
    },
    {
        tag: "680",
        label: "Summary",
        lines: [
            {
                text: "I do my best work alone, in long uninterrupted stretches, on questions nobody has tidied up yet. I’d rather be wrong in a way I can measure than right in a way I can’t.",
            },
            {
                text: "Forecasting keeps score of how often I’m wrong, and for now the score says top forecaster. Next stop is formal methods, where checking is the whole job. Early days. I’m enjoying the road.",
            },
        ],
    },
    {
        tag: "372",
        label: "Field of activity",
        lines: [
            { text: "Data science" },
            { text: "Forecasting" },
            { text: "Formal methods (just getting started)" },
            { text: "Bioinformatics (retired, mostly)" },
            { text: "Essays and poems, in English and French" },
        ],
    },
    {
        tag: "374",
        label: "Occupation",
        lines: [
            {
                text: "Data Analyst Intern, OCP Group, Casablanca. Went hunting for unpaid debt in the phosphate rock business. Most of it looked like credits nobody had matched.",
                when: "2026",
            },
            {
                text: "Data Engineer Intern, Eurafric Information, Casablanca. Built a data pipeline end to end and got five tools to take turns, with Airflow as the referee.",
                when: "2025",
            },
            {
                text: "Researcher & Artist, Independent, Paris. Wandered through ecology, biophysics, nutrition, agronomy and geography, writing a research proposal in each. Made thirty-odd poems, photographs and drawings along the way.",
                when: "2020 – 2024",
            },
            {
                text: "Data Scientist Intern, Pitié-Salpêtrière University Hospital, Paris. Sifted 10 GB of microbial DNA from autoimmune patients for biomarkers. The digging ended up in a published clinical study.",
                when: "2019 – 2020",
            },
            {
                text: "Bioinformatician Intern, Institute of Biology of the École normale supérieure, Paris. Taught a workflow engine some statistics, with unit tests, so single-cell analyses come out the same twice.",
                when: "2018 – 2019",
            },
        ],
    },
    {
        tag: "678",
        label: "Biographical data",
        lines: [
            {
                text: "Licence in Data Science, International University of Casablanca.",
                when: "2024 – 2027",
            },
            {
                text: "Master’s in Bioinformatics, University of Rouen. Left one semester short.",
                when: "2017 – 2020",
            },
            {
                text: "Licence in Life Sciences, University of Tours.",
                when: "2014 – 2017",
            },
            {
                text: "On the side: Theory of Computation (MIT), Applied Category Theory (MIT), Real Analysis (Harvey Mudd), Linear Algebra Done Right (U. Washington).",
            },
        ],
    },
    {
        tag: "377",
        label: "Associated language",
        lines: [
            { text: "French (native)" },
            { text: "English (fluent)" },
            { text: "Darija (fluent)" },
            { text: "Modern Standard Arabic (understand most of it)" },
            { text: "Spanish (getting there)" },
        ],
    },
    {
        tag: "368",
        label: "Programming and tools",
        lines: [
            { text: "Fluent: Python, R, SQL" },
            { text: "Conversational: C, Rust, Perl" },
            { text: "Can order a coffee: Java, OCaml, Julia" },
            {
                text: "Toolbox: Polars, SQLite, Airflow, scikit-learn, PyTorch, XGBoost, Streamlit, Git, Docker, GitHub Actions, Claude Code",
            },
        ],
    },
    {
        tag: "370",
        label: "Associated place",
        lines: [
            { text: "Casablanca, Morocco", when: "1996 – 2014" },
            { text: "Tours, France", when: "2014 – 2017" },
            { text: "Rouen, France", when: "2017 – 2020" },
            { text: "Paris, France", when: "2018 – 2024" },
            { text: "Casablanca, Morocco", when: "2023 – now" },
            { text: "The open interval (0, 1)", when: "always" },
        ],
    },
];
