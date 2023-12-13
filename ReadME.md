# TimeSpan

A simple library which is mostly the same as the C#/.NET Framework TimeSpan.

## Main differences from the C#/.NET Framework TimeSpan

- TypeScript, not C#/.NET
- Milliseconds are the base measure
  - in C#/.NET, the base measure is ticks (1 tick = 100 nanoseconds or 1 tick = a 0001th of a millisecond).
- supports camelCase and PascalCase
  - in C#/.NET, they use PascalCase and don't support anything else.
