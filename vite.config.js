export default {
    root: "./src",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: "./src/index.html",
                expiditions: "./src/expeditions.html",
                terms: "./src/terms-and-conditions.html"
            }
        }
    }
}