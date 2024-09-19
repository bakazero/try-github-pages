import { $ } from "bun";
import { readFileSync, writeFileSync } from "fs";

// Function to modify base href in .html files
async function modifyBaseHref(isProduction) {
  try {
    // Use Bun's $ shell to find all .html files in the current directory
    const result = await $`find . -name "*.html"`;

    // Convert Buffer to string and handle the result
    const output = result.stdout.toString(); // Convert Buffer to string
    const filesArray = output.trim().split("\n").filter(Boolean);

    // Iterate through each HTML file
    filesArray.forEach((file) => {
      try {
        const content = readFileSync(file, "utf-8");
        const newBaseHref = isProduction ? '<base href="https://bakazero.github.io/try-github-pages/" />' : '<base href="/" />';
        const updatedContent = content.replace(/<base href=".*?" \/>/, newBaseHref);
        writeFileSync(file, updatedContent, "utf-8");
        console.log(`Updated base href in ${file} to ${isProduction ? "production" : "development"}`);
      } catch (err) {
        console.error(`Error processing file ${file}:`, err);
      }
    });
  } catch (err) {
    console.error("Error modifying base href:", err);
  }
}

// Function to update baseUrl in settings.js
function updateBaseUrl(isProduction) {
  try {
    // Read settings.js file
    const settingsPath = "./settings.js"; // Adjust path if necessary
    const content = readFileSync(settingsPath, "utf-8");

    // Define new base URL based on the mode
    const newBaseUrl = isProduction ? "https://bakazero.github.io/try-github-pages/" : "/";

    // Update the baseUrl value in the settings.js content
    const updatedContent = content.replace(/export const baseUrl = ".*?";/, `export const baseUrl = "${newBaseUrl}";`);

    // Write the updated content back to settings.js
    writeFileSync(settingsPath, updatedContent, "utf-8");
    console.log(`Updated baseUrl in ${settingsPath} to ${isProduction ? "production" : "development"}`);
  } catch (err) {
    console.error("Error updating baseUrl:", err);
  }
}

// Main function to run the script
const mode = process.argv[2]; // Get the mode from command line arguments

if (mode === "dev") {
  modifyBaseHref(false); // Set base href for development
  updateBaseUrl(false); // Set baseUrl for development
} else if (mode === "prod") {
  modifyBaseHref(true); // Set base href for production
  updateBaseUrl(true); // Set baseUrl for production
} else {
  console.log("Usage: bun run switch-mode.js [dev|prod]");
}
