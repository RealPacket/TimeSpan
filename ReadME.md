# TimeSpan

A simple library which is mostly the same as the C#/.NET Framework TimeSpan.
Run the example code in `bench.ts` using `deno bench` or `deno run bench.ts`.

## Main differences from the C#/.NET Framework TimeSpan

- TypeScript, not C#/.NET
- Milliseconds are the base measure
  - in C#/.NET, the base measure is ticks (1 tick = 100 nanoseconds or 1 tick = a 0001th of a millisecond).
- supports camelCase and PascalCase (for functions/methods only, please don't use this)
  - in C#/.NET, they use PascalCase and don't support anything else.

## Example and comparing to the C# version

### Compare to: This Library

```ts
import TimeSpan from "/path/to/TimeSpan/mod.ts";

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
```

### Compare to: C#'s TimeSpan class

```cs
var ts = TimeSpan.FromDays(10);
Console.WriteLine("--- Days         ---");

// these 2 both output 10.
Console.WriteLine(ts.Days);
Console.WriteLine(ts.TotalDays);

Console.WriteLine("/// Days         ///");
Console.WriteLine("--- Hours        ---");
Console.WriteLine(); // separator

Console.WriteLine(ts.Hours); // 0 (we didn't pass any hours in)
Console.WriteLine(ts.TotalHours); // 240 (10 days = 240 hours)

Console.WriteLine("/// Hours        ///");
Console.WriteLine(); // separator
Console.WriteLine("--- Minutes      ---");

Console.WriteLine(ts.Minutes); // 0 (we didn't pass any minutes in)
Console.WriteLine(ts.TotalMinutes); // 14400

Console.WriteLine("/// Minutes      ///");
Console.WriteLine(); // separator
Console.WriteLine("--- Seconds      ---");

Console.WriteLine(ts.Seconds); // 0 (we didn't pass any seconds in)
Console.WriteLine(ts.TotalSeconds); // 864000

Console.WriteLine("/// Seconds      ///");
Console.WriteLine(); // separator
Console.WriteLine("--- Milliseconds ---");

Console.WriteLine(ts.Milliseconds); // 0 (we didn't pass any milliseconds in)
Console.WriteLine(ts.TotalMilliseconds); // 14400
Console.WriteLine("/// Milliseconds ///");
```
