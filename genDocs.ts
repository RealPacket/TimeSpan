import { Application } from "npm:typedoc";

// Application.bootstrap also exists, which will not load plugins
// Also accepts an array of option readers if you want to disable
// TypeDoc's tsconfig.json/package.json/typedoc.json option readers
const app = await Application.bootstrapWithPlugins({
  entryPoints: ["src/mod.ts"],
  name: "TimeSpan",
});

const project = await app.convert();

// Project may not have converted correctly
const outputDir = "docs";
if (project) {
  // Rendered docs
  await app.generateDocs(project, outputDir);
  // Alternatively generate JSON output
  await app.generateJson(project, `${outputDir}/documentation.json`);
}
