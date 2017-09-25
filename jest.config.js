module.exports = {
    testMatch: ["**/?*.spec.ts"],
    "moduleNameMapper": {
        "^vue$": "vue/dist/vue.esm.js"
    },
    "moduleFileExtensions": [
        "ts",
        "js",
        "vue"
    ],
    "transform": {
        "\.(t|j)s$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
        "\.vue$": "<rootDir>/node_modules/jest-vue"
    },
   "transformIgnorePatterns" : [
       "node_modules/(?!vue/)" // vue.esm.js needs transpiling
   ],
};
