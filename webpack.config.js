const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, './src')
        ]
    },
    module: {
        rules: [
            {test: /.tsx?$/, exclude: /(node_modules)/, loader: "ts-loader"}
        ]
    }
}