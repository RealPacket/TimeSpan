import TimeSpan from "../src/mod.ts";
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

const n = 1;
console.info("time used in test:", n);

//#region fromX(...)
console.group("fromX(...)");

Deno.test("fromMilliseconds", () => {
  const span = TimeSpan.fromMilliseconds(n);
  assertEquals(span.Milliseconds, n);
  assertEquals(span.TotalMilliseconds, n);
  console.log('Span returned from "fromMilliseconds":', span);
});

Deno.test("fromSeconds", () => {
  const span = TimeSpan.fromSeconds(n);
  assertEquals(span.Milliseconds, 0);
  assertEquals(span.TotalMilliseconds, TimeSpan.SECONDS * n);
  assertEquals(span.Seconds, n);
  console.log('Span returned from "fromSeconds":', span);
});

Deno.test("fromMinutes", () => {
  const span = TimeSpan.fromMinutes(n);
  assertEquals(span.Milliseconds, 0);
  assertEquals(span.TotalMilliseconds, TimeSpan.MINUTES * n);
  assertEquals(span.Minutes, n);
  console.log('Span returned from "fromMinutes":', span);
});

Deno.test("fromHours", () => {
  const span = TimeSpan.fromHours(n);
  assertEquals(span.Milliseconds, 0);
  assertEquals(span.TotalMilliseconds, TimeSpan.HOURS * n);
  assertEquals(span.Hours, n);
  console.log('Span returned from "fromHours":', span);
});

Deno.test("fromDays", () => {
  const span = TimeSpan.fromDays(n);
  assertEquals(span.Milliseconds, 0);
  assertEquals(span.TotalMilliseconds, TimeSpan.DAYS * n);
  assertEquals(span.Days, n);
  console.log('Span returned from "fromDays":', span);
});

console.groupEnd();
//#endregion

//#region from("X", y)
Deno.test("from", async t => {
  console.group('from("X")');
  await t.step("milliseconds", () => {
    const span = TimeSpan.from("milliseconds", n);
    assertEquals(span.Milliseconds, n);
    assertEquals(span.TotalMilliseconds, n);
    console.log("Span returned:", span);
  });
  await t.step("seconds", () => {
    const span = TimeSpan.from("seconds", n);
    assertEquals(span.Milliseconds, 0);
    assertEquals(span.TotalMilliseconds, TimeSpan.SECONDS * n);
    console.log("Span returned:", span);
  });
  await t.step("minutes", () => {
    const span = TimeSpan.from("minutes", n);
    assertEquals(span.Milliseconds, 0);
    assertEquals(span.TotalMilliseconds, TimeSpan.MINUTES * n);
    console.log("Span returned:", span);
  });
  await t.step("hours", () => {
    const span = TimeSpan.from("hours", n);
    assertEquals(span.Milliseconds, 0);
    assertEquals(span.TotalMilliseconds, TimeSpan.HOURS * n);
    console.log("Span returned:", span);
  });
  await t.step("days", () => {
    const span = TimeSpan.from("days", n);
    assertEquals(span.Milliseconds, 0);
    assertEquals(span.TotalMilliseconds, TimeSpan.DAYS * n);
    console.log("Span returned:", span);
  });
  console.groupEnd();
});

//#endregion

//#region to("X")
Deno.test("to", async t => {
  console.group('to("X")');
  await t.step("milliseconds", () => {
    const span = TimeSpan.from("milliseconds", n);
    assertEquals(span.to("milliseconds"), n);
    console.log("Span returned:", span);
  });
  await t.step("seconds", () => {
    const span = TimeSpan.from("seconds", n);
    assertEquals(span.to("milliseconds"), TimeSpan.SECONDS * n);
    assertEquals(span.to("seconds"), n);
    console.log("Span returned:", span);
  });
  await t.step("minutes", () => {
    const span = TimeSpan.from("minutes", n);
    assertEquals(span.to("milliseconds"), TimeSpan.MINUTES * n);
    assertEquals(span.to("minutes"), n);
    console.log("Span returned:", span);
  });
  await t.step("hours", () => {
    const span = TimeSpan.from("hours", n);
    assertEquals(span.to("milliseconds"), TimeSpan.HOURS * n);
    assertEquals(span.to("hours"), n);
    console.log("Span returned:", span);
  });
  await t.step("days", () => {
    const span = TimeSpan.from("days", n);
    assertEquals(span.to("milliseconds"), TimeSpan.DAYS * n);
    assertEquals(span.to("days"), n);
    console.log("Span returned:", span);
  });
  console.groupEnd();
});
//#endregion
