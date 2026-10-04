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
        lines: [
            { text: "Hatim El Jazouli" },
            { text: "H. El Jazouli" },
            { text: "Owm (Substack)" },
        ],
    },
    {
        tag: "680",
        label: "Summary",
        lines: [
            {
                text: "Data scientist and Metaculus forecaster (top 2%, 100+ resolved questions) with hands-on experience building and evaluating systems under uncertainty: an ensemble LLM forecasting bot combining diverse model personas into scored, judgmental predictions; the Context Tree Switching algorithm implemented from scratch for sequential-prediction research; and financial time-series models (XGBoost, Hull Tactical competition) evaluated against real market outcomes. Currently applying quantitative methods to receivables analysis and reconciliation at OCP Group.",
            },
            {
                text: "Comfortable taking apart systems I didn’t build, stating uncertainty explicitly, and treating a wrong answer as data rather than noise. Fluent in Python; working knowledge of Rust; cross-domain research background (metagenomics, causal gene regulatory networks) that trained me to work fast inside domains I don’t start out knowing.",
            },
        ],
    },
    {
        tag: "372",
        label: "Field of activity",
        lines: [
            { text: "Data science" },
            { text: "Forecasting under uncertainty" },
            { text: "Machine learning research" },
            { text: "Bioinformatics" },
            { text: "Poetry and photography" },
        ],
    },
    {
        tag: "374",
        label: "Occupation",
        lines: [
            {
                text: "Data Analyst Intern, OCP Group, Casablanca. Quantitative methods for receivables analysis and reconciliation.",
                when: "2026 – present",
            },
            {
                text: "Data Engineer Intern, Eurafric Information, Casablanca. A complete data engineering pipeline from ingestion to serving in a pseudo-distributed environment, with Airflow orchestrating five data processing tools.",
                when: "2025",
            },
            {
                text: "Researcher & Artist, Independent, Paris. Five interdisciplinary research proposals (theoretical ecology, biophysics, nutrition, agronomy, geography) synthesising 50+ publications, and 30+ original creative works in poetry, photography and sketches.",
                when: "2020 – 2024",
            },
            {
                text: "Data Scientist Intern, Pitié-Salpêtrière University Hospital, Paris. An R pipeline preprocessing 10 GB+ of autoimmune patient metagenomic data, and exploratory analysis to identify biomarkers, contributing to one published clinical study.",
                when: "2019 – 2020",
            },
            {
                text: "Bioinformatician Intern, Institute of Biology of the École normale supérieure, Paris. Statistical tools integrated into a workflow engine, with unit tests, for scRNA-seq reproducibility, and statistical analysis of gene expression in immunological cell types.",
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
                text: "Master in Bioinformatics, University of Rouen. Left during the final semester.",
                when: "2017 – 2020",
            },
            {
                text: "Licence in Life Sciences, University of Tours.",
                when: "2014 – 2017",
            },
            {
                text: "Independent coursework includes Bayesian Data Analysis (Aalto); Topological Data Analysis (Spanish Topology Network); Data Compression With and Without Deep Probabilistic Models (Tübingen); Algorithmic Game Theory (Stanford); Real Analysis (Harvey Mudd); Linear Algebra Done Right (U. Washington); Applied Category Theory (MIT); Theory of Computation (MIT); Introduction to AI Safety, Ethics & Society (Center for AI Safety); Biosecurity (BlueDot Impact).",
            },
        ],
    },
    {
        tag: "377",
        label: "Associated language",
        lines: [
            { text: "French (native)" },
            { text: "English (fluent)" },
            { text: "Arabic (fluent)" },
            { text: "Spanish (intermediate)" },
        ],
    },
    {
        tag: "368",
        label: "Programming and tools",
        lines: [
            { text: "Advanced: Python, R, SQL" },
            { text: "Intermediate: C, Rust, Perl" },
            { text: "Beginner: Java, OCaml, Julia" },
            {
                text: "Tools: Claude Code, Git, Docker, Jupyter, Polars, scikit-learn, PyTorch, TensorFlow",
            },
        ],
    },
    {
        tag: "370",
        label: "Associated place",
        lines: [
            { text: "Casablanca, Morocco" },
            { text: "Paris, France", when: "2018 – 2024" },
        ],
    },
    {
        tag: "670",
        label: "Source data found",
        lines: [
            {
                text: "Metaculus: top 2%, 100+ resolved questions",
                href: "https://www.metaculus.com/accounts/profile/198568/",
            },
            { text: "Curriculum vitae, August 2026" },
        ],
    },
];
