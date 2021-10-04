module.exports = {
    transform: {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
        "^.+\\.svg$": "<rootDir>/svgTransform.js",
    },
};
