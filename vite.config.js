import { defineConfig } from "vite";
export default defineConfig({
  plugins: [{
    enforce: "pre",
    name: "bug-repro-pre",
    resolveId(importer, importee) {
      // In dev mode we will always see `importee` being the `.html` file.
      // In build mode it is accurate.
      console.log({
        importer,
        importee
      })
      return null;
    }
  }],
});
