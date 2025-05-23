import Papa from "papaparse";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const SHEET_ID = config.googleSheetId;

  // hardcoding the tab ids here
  const collections = {
    taglines: "1711650765",
    shows: "1436202587",
    championship: "163441879",
  };

  const results = {
    taglines: [],
    shows: [],
    championship: [],
  };

  // Fetch all collections in parallel
  const promises = Object.entries(collections).map(async ([name, gid]) => {
    try {
      const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;
      console.log(`Fetching ${name} from ${url}`);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch ${name}: ${response.statusText}`);
      }

      const csvText = await response.text();
      const { data } = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        trimHeaders: true,
      });

      results[name] = data.filter((row) => row.Publié !== "FALSE");
    } catch (error) {
      console.error(`Error fetching ${name}:`, error);
      results[name] = []; // Return empty array on error
    }
  });

  await Promise.all(promises);

  return results;
});
