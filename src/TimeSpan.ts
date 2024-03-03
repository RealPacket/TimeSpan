import { DAYS, HOURS, MINUTES, SECONDS, measure } from "./measures.ts";

/**
 * A class which represents a span of time.
 */
export class TimeSpan {
  /**
   * The amount of milliseconds in a day.
   * @constant
   */
  static readonly DAYS = DAYS;
  /**
   * The amount of milliseconds in a hour.
   * @constant
   */
  static readonly HOURS = HOURS;
  /**
   * The amount of milliseconds in a minute.
   * @constant
   */
  static readonly MINUTES = MINUTES;
  /**
   * The amount of milliseconds in a second.
   * @constant
   */
  static readonly SECONDS = SECONDS;
  static readonly ZERO = new TimeSpan();
  /**
   * The {@link Days days} component of the time interval represented by the current {@link TimeSpan} instance.
   */
  Days = 0;
  /**
   * The {@link Hours hours} component of the time interval represented by the current {@link TimeSpan} instance.
   */
  Hours = 0;
  /**
   * The {@link Minutes minutes} component of the time interval represented by the current {@link TimeSpan} instance.
   */
  Minutes = 0;
  /**
   * The {@link Seconds seconds} component of the time interval represented by the current {@link TimeSpan} instance.
   */
  Seconds = 0;
  /**
   * The {@link Milliseconds milliseconds} component of the time interval represented by the current {@link TimeSpan} instance.
   */
  Milliseconds = 0;
  /**
   * The value of the current {@link TimeSpan} instance expressed in whole and fractional days.
   */
  TotalDays = 0;
  /**
   * The value of the current {@link TimeSpan} instance expressed in whole and fractional hours.
   */
  TotalHours = 0;
  /**
   * The value of the current {@link TimeSpan} instance expressed in whole and fractional minutes.
   */
  TotalMinutes = 0;
  /**
   * The value of the current {@link TimeSpan} instance expressed in whole and fractional seconds.
   */
  TotalSeconds = 0;
  /**
   * The value of the current {@link TimeSpan} instance expressed in whole and fractional milliseconds.
   */
  TotalMilliseconds = 0;
  /**
   * Creates a new instance of the TimeSpan class.
   * @param milliseconds The number of milliseconds in the time span.
   * @param seconds The number of seconds in the time span.
   * @param minutes The number of minutes in the time span.
   * @param hours The number of hours in the time span.
   * @param days The number of days in the time span.
   */
  constructor(milliseconds = 0, seconds = 0, minutes = 0, hours = 0, days = 0) {
    this.Milliseconds = milliseconds;
    this.Seconds = seconds;
    this.Minutes = minutes;
    this.Hours = hours;
    this.Days = days;
    this.TotalMilliseconds =
      this.Milliseconds +
      this.Seconds * SECONDS +
      this.Minutes * MINUTES +
      this.Hours * HOURS +
      this.Days * DAYS;
    this.TotalSeconds = this.TotalMilliseconds / SECONDS;
    this.TotalMinutes = this.TotalMilliseconds / MINUTES;
    this.TotalHours = this.TotalMilliseconds / HOURS;
    this.TotalDays = this.TotalMilliseconds / DAYS;
  }
  /**
   * Creates a new time span instance with the given number of days.
   * @param days The number of days in the time span.
   * @returns A new time span instance with the given number of days.
   */
  static fromDays(days = 1) {
    return new TimeSpan(0, 0, 0, 0, days);
  }
  /**
   * Pascal case version of the {@link fromDays} method.
   * @hidden
   * @ignore
   */
  static FromDays(days = 1) {
    return TimeSpan.fromDays(days);
  }
  /**
   * Creates a new time span instance with the given number of hours.
   * @param hours The number of hours in the time span.
   * @returns A new time span instance with the given number of hours.
   */
  static fromHours(hours = 1): TimeSpan {
    return new TimeSpan(0, 0, 0, hours);
  }
  /**
   * Pascal case version of the {@link fromHours} method.
   * @hidden
   * @ignore
   */
  static FromHours(hours = 1) {
    return TimeSpan.fromHours(hours);
  }
  /**
   * Creates a new time span instance with the given number of minutes.
   * @param minutes The number of minutes in the time span.
   * @returns A new time span instance with the given number of minutes.
   */
  static fromMinutes(minutes = 1) {
    return new TimeSpan(0, 0, minutes);
  }
  /**
   * Pascal case version of the {@link fromMinutes} method.
   * @hidden
   * @ignore
   */
  static FromMinutes(minutes = 1) {
    return TimeSpan.fromMinutes(minutes);
  }
  /**
   * Creates a new time span instance with the given number of seconds.
   * @param seconds The number of seconds in the time span.
   * @returns A new time span instance with the given number of seconds.
   */
  static fromSeconds(seconds = 1) {
    return new TimeSpan(0, seconds);
  }
  /**
   * Pascal case version of the {@link fromSeconds} method.
   * @hidden
   */
  static FromSeconds(seconds = 1) {
    return TimeSpan.fromSeconds(seconds);
  }
  /**
   * Creates a new time span instance with the given type of time span and a number.
   * @param type - The type of time span to create.
   * @param time - The number of the given type of time span in the time span.
   * @returns TimeSpan A new time span instance with the given type of time span and a number.
   * @throws Unsupported time span type.
   */
  static from(type: measure, time = 1): TimeSpan {
    switch (type) {
      case "milliseconds":
      case "millisecond":
      case "ms":
        return TimeSpan.fromMilliseconds(time);
      case "seconds":
      case "second":
      case "sec":
        return TimeSpan.fromSeconds(time);
      case "minutes":
      case "min":
      case "mins":
        return TimeSpan.fromMinutes(time);
      case "hour":
      case "hours":
      case "hr":
      case "hrs":
        return TimeSpan.fromHours(time);
      case "days":
      case "d":
      case "ds":
        return TimeSpan.fromDays(time);
      default:
        throw new Error(`Unsupported time span type: "${type}"`);
    }
  }
  /**
   * Converts the time span to a given type of time span and returns the number.
   * @param type The type of time span to convert to.
   * @returns The number of the given type of time span in the time span.
   * @throws Unsupported type
   */
  to(type: measure): number {
    switch (type) {
      case "milliseconds":
      case "millisecond":
      case "ms":
        return this.TotalMilliseconds;
      case "seconds":
      case "second":
      case "sec":
        return this.TotalSeconds;
      case "minutes":
      case "min":
      case "mins":
        return this.TotalMinutes;
      case "hour":
      case "hours":
      case "hr":
      case "hrs":
        return this.TotalHours;
      case "days":
      case "d":
      case "ds":
        return this.TotalDays;
      default:
        throw new Error(`Unsupported type: "${type}"`);
    }
  }
  /**
   * Creates a new time span instance with the given number of milliseconds.
   * @param milliseconds - The number of milliseconds in the time span.
   * @returns A new time span instance with the given number of milliseconds.
   * @hidden
   * @ignore
   */
  static fromMilliseconds(milliseconds = 1): TimeSpan {
    return new TimeSpan(milliseconds);
  }

  /**
   * Pascal case version of the {@link fromMilliseconds} method.
   * @hidden
   * @ignore
   */
  static FromMilliseconds(milliseconds = 1): TimeSpan {
    return TimeSpan.fromMilliseconds(milliseconds);
  }
}

export default TimeSpan;
