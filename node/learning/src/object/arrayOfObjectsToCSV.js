// define a fuction that convert JSON data to CSV format

const JSON_to_CSV = (arr, columns, delimiter = ",") =>
  [
    // combine colum titles with the delimiter
    columns.join(delimiter),
    ...arr.map(
      (obj) =>
        columns.reduce(
          (acc, key) =>
            `${acc}${!acc.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`,
          "",
        ), // Format value within double quotes
    ),
  ].join("\n");
console.log(
  JSON_to_CSV(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 9 }],
    ["x", "y"],
  ),
);
