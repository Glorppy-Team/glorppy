const fs = require("fs");
const path = require("path");

const versionFile = path.join(__dirname, "version.js");

const rootPackageFile = path.join(
    process.cwd(),
    "package.json"
);

const botPackageFile = path.join(
    process.cwd(),
    "apps",
    "bot",
    "package.json"
);

const rootLockFile = path.join(
    process.cwd(),
    "package-lock.json"
);

const versionFileContent = fs.readFileSync(versionFile, "utf-8");

const match = versionFileContent.match(
    /const version = "(.*?)";/
);

if (!match) {
    throw new Error("Version not found in version.js");
}

const version = match[1];

function updatePackageVersion(packagePath) {
    const packageJson = JSON.parse(
        fs.readFileSync(packagePath, "utf-8")
    );
    
    packageJson.version = version;
    
    fs.writeFileSync(
        packagePath,
        JSON.stringify(packageJson, null, 4) + "\n"
    );
}

function updatePackageLockVersion(lockPath) {
    const packageLock = JSON.parse(
        fs.readFileSync(lockPath, "utf-8")
    );

    packageLock.version = version;

    if (
    packageLock.packages &&
    packageLock.packages[""]
    ) {
        packageLock.packages[""].version = version;
    }

    fs.writeFileSync(
        lockPath,
        JSON.stringify(packageLock, null, 4) + "\n"
    );
}

updatePackageVersion(rootPackageFile);
updatePackageVersion(botPackageFile);
updatePackageLockVersion(rootLockFile);

console.log(`✓ All package.json synchronized to Glorppy v${version}`);
