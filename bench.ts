import TimeSpan from "./src/mod.ts";

const ts = TimeSpan.fromDays(10);

console.log("--- Days         ---");

// these 2 both output 10.
console.log(ts.Days);
console.log(ts.TotalDays);

console.log("/// Days         ///");
console.log("--- Hours        ---");
console.log(); // separator

console.log(ts.Hours); // 0 (we didn't pass any hours in)
console.log(ts.TotalHours); // 240 (10 days = 240 hours)

console.log("/// Hours        ///");
console.log(); // separator
console.log("--- Minutes      ---");

console.log(ts.Minutes); // 0 (we didn't pass any minutes in)
console.log(ts.TotalMinutes);

console.log("/// Minutes      ///");
console.log(); // separator
console.log("--- Seconds      ---");

console.log(ts.Seconds); // 0 (we didn't pass any seconds in)
console.log(ts.TotalSeconds);

console.log("/// Seconds      ///");
console.log(); // separator
console.log("--- Milliseconds ---");

console.log(ts.Milliseconds); // 0 (we didn't pass any milliseconds in)
console.log(ts.TotalMilliseconds); // 14400
console.log("/// Milliseconds ///");
