/**
 * A type representing common aliases for the milliseconds measure as a type.
 */
export type millisecondAlias = "milliseconds" | "millisecond" | "ms";
/**
 * A type representing common aliases for the seconds measure as a type.
*/
export type secondAlias = "seconds" | "second" | "sec";
/**
 * A type representing common aliases for the minutes measure as a type.
*/
export type minAlias = "minutes" | "min" | "mins";
/**
 * A type representing common aliases for the hours measure as a type.
*/
export type hourAlias = "hr" | "hrs" | "hour";
/**
 * A type representing common aliases for the days measure as a type.
*/
export type dayAlias = "days" | "d" | "ds";

/**
 * A type representing some time measures as a string.
 */
export type measure =
  | millisecondAlias
  | secondAlias
  | minAlias
  | hourAlias
  | dayAlias;

/**
 * How many milliseconds are in a second.
 * @constant
 */
export const SECONDS = 1000;
/**
 * How many milliseconds are in a minute.
 * @constant
 */
export const MINUTES = SECONDS * 60;
/**
 * How many milliseconds are in a hour.
 * @constant
 */
export const HOURS = MINUTES * 60;
/**
 * How many milliseconds are in a day.
 * @constant
 */
export const DAYS = HOURS * 24;

export default measure;

