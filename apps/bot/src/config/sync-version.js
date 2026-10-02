const fs = require("fs");
const path = require("path");

const versionFile = path.join(__dirname, "../src/config/version.js");
const packageFile = path.join(__dirname, "../package.json");

const versionFileContent = fs.readFileSync(versionFile, "utf-8");

const match = versionFileContent.match(
    /const version = "(.*?)";/
);

if (!match) {
    throw new Error("Version not found in version.js");
};

const version = match[1];

const packageJson = JSON.parse(
    fs.readFileSync(packageFile, "utf-8")
);

packageJson.version = version;

fs.writeFileSync(
    packageFile,
    JSON.stringify(packageJson, null, 4) + "\n",
);

console.log(`✓ package.json synchronized to Glorppy v${version}`);
