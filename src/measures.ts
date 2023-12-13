/**
 * A type representing a measure as a string.
 */
export type measure = "milliseconds" | "seconds" | "minutes" | "hours" | "days";

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
