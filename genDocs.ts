import { Application } from "npm:typedoc";

// Application.bootstrap also exists, which will not load plugins
// Also accepts an array of option readers if you want to disable
// TypeDoc's tsconfig.json/package.json/typedoc.json option readers
const app = await Application.bootstrapWithPlugins({
	entryPoints: ["src/mod.ts"],
	name: "TimeSpan",
});

console.time("Convert project (app.convert)");
const project = await app.convert().then(x => {
	console.timeEnd("Convert project (app.convert)");
	return x;
});
const GENERATE_JSON = false;

const outputDir = "docs";

if (project) {
	console.time("Generate docs (HTML)");
	// Rendered docs
	app.generateDocs(project, outputDir).then(() =>
		console.timeEnd("Generate docs (HTML)")
	);
	if (GENERATE_JSON) {
		console.time("Generate docs (JSON)");
		// Alternatively generate JSON output
		app.generateJson(project, `${outputDir}/documentation.json`).then(() =>
			console.timeEnd("Generate docs (JSON)")
		);
	}
}
