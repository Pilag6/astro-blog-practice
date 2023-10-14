// OPTION 1 (English)

// export const getFormattedDate = (date) =>
//     date
//         ? new Date(date).toLocaleDateString("en-us", {
//               year: "numeric",
//               month: "short",
//               day: "numeric",
//           })
//         : "";

// Returns a date in the format of "Jan 1, 2020"

// ----------------------------------------------------------------------

// OPTION 2 (English)

export const getFormattedDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
}

// Returns a date in the format of "January 1, 2020"
// ----------------------------------------------------------------------

// OPTION 3 (Spanish)

// export const getFormattedDate = (date) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(date).toLocaleDateString("es-ES", options);
// }

// Returns a date in the format of "1 de enero de 2020"
