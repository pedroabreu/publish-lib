const publishLib = require("../src")

publishLib({
    libFolder: "dist",
    srcFolder: "src",
    fileFormat: ["js"],
    ignoreFiles: /spec./,
    extraFilesCopy: ["README.md"],
    output: {
        es: true
    },
    root: "es"
})
