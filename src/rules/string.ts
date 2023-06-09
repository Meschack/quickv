import { isNumber } from ".";
import { spliteParam, throwEmptyArgsException } from "../utils";
import { RuleCallBack } from "./../contracts/rule-callback";
/**
 * Validates an email address.
 *
 * @param input The email address to validate.
 * @param options Optional parameters.
 * @returns Whether the email address is valid.
 */
export const email: RuleCallBack = (input, ...options) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(input);
};

/**
 * Validates that the input is at least a certain length.
 *
 * @param input The input to validate.
 * @param length The minimum length.
 * @returns Whether the input is at least the specified length.
 */
export const minlength: RuleCallBack = (input, length) => {
  if (!input) {
    return false;
  }
  return is_string(input) ? input.length >= Number(length) : false;
};

/**
 * Validates that the input is no more than a certain length.
 *
 * @param input The input to validate.
 * @param length The maximum length.
 * @returns Whether the input is no more than the specified length.
 */
export const maxlength: RuleCallBack = (input, length) => {
  if (!input) {
    return true;
  }
  return is_string(input) ? input.length <= Number(length) : false;
};
/**
 * Checks if the input is a string.
 *
 * @param val The input to check.
 * @returns Whether the input is a string.
 */
export const is_string: RuleCallBack = (val: any) => {
  return typeof val === "string";
};

/**
 * Validates a URL.
 *
 * @param input The URL to validate.
 * @returns Whether the URL is valid.
 */
export const url: RuleCallBack = (input) => {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(input);
};

/**
 * Checks if the input starts with an uppercase letter.
 *
 * @param input The input to check.
 * @returns Whether the input starts with an uppercase letter.
 */
export const startWithUpper: RuleCallBack = (input) => {
  if (typeof input !== "string" || input.length === 0) {
    return false;
  }
  const regex = /^[A-Z]/;
  return regex.test(input);
};

/**
 * Checks if the input starts with a lowercase letter.
 *
 * @param input The input to check.
 * @returns Whether the input starts with a lowercase letter.
 */

export const startWithLower: RuleCallBack = (input) => {
  if (typeof input !== "string" || input.length === 0) {
    return false;
  }
  const regex = /^[a-z]/;
  return regex.test(input);
};

/**
 * Checks whether a given string starts with any of the given prefixes.
 *
 * @param input - The string to check.
 * @param prefix - The prefixes to check for, as a comma-separated list of strings.
 * @returns `true` if the input string starts with any of the given prefixes, `false` otherwise.
 * @throws An exception with the message "Missing required argument: startWith" if the `prefix` parameter is falsy.
 */
export const startWith: RuleCallBack = (input, prefix) => {
  if (!prefix) {
    throwEmptyArgsException("startWith");
  }
  const prefixes = spliteParam(prefix ?? "");
  if (!is_string(input)) {
    return false;
  }
  return prefixes.some((p) => input.startsWith(p));
};

/**
 * Checks whether a given string ends with one of the specified suffixes.
 *
 * @param input - The string to check.
 * @param suffix - A comma-separated list of suffixes to check against.
 * @returns `true` if the input string ends with one of the specified suffixes, `false` otherwise.
 * @throws An exception with the message "Missing required argument: endWith" if the `suffix` parameter is falsy.
 */
export const endWith: RuleCallBack = (input, suffix) => {
  if (!suffix) {
    throwEmptyArgsException("endWith");
  }
  const suffixes = spliteParam(suffix ?? "");
  if (!is_string(input)) {
    return false;
  }
  return suffixes.some((s) => input.endsWith(s));
};

/**
 * Checks if the input contains any of the specified substrings.
 *
 * @param input - The input to check.
 * @param substrings - A comma-separated  substrings to check for.
 * @returns `true` if the input contains any of the specified substrings, `false` otherwise.
 * @throws An exception with the message "Missing required argument: contains" if the `substrings` parameter is falsy.
 */
export const contains: RuleCallBack = (input, substring) => {
  if (!substring) {
    throwEmptyArgsException("contains");
  }
  const substrs = spliteParam(substring ?? "");
  if (!is_string(input)) {
    return false;
  }
  return substrs.every((substr) => input.includes(substr));
};

/**
 * Checks if the input has the specified length.
 *
 * @param input - The input to check.
 * @param size - The desired length of the input.
 * @returns `true` if the input has the specified length, `false` otherwise.
 * @throws An exception with the message "The length rule argument must be an integer" if the `size` parameter is not an integer.
 */
export const length: RuleCallBack = (input: any, size: any) => {
  if (!isNumber(size)) {
    throw new Error("The length rule argument must be an integer");
  }
  size = parseInt(size);
  if (typeof input == "string" || typeof input == "number") {
    input = input.toString().split("");
  } else if (
    typeof input === "object" &&
    input !== null &&
    input !== undefined
  ) {
    input = [];
  }

  if (Array.isArray(input)) {
    return input.length === size;
  }
  return false;
};
/**
 * Checks if the input is a valid password.
 *
 * A valid password is at least 8 characters long and contains at least one uppercase letter, one lowercase letter, one number, and one special character.
 *
 * @param input - The input to check.
 * @returns `true` if the input is a valid password, `false` otherwise.
 */
export const passwordRule: RuleCallBack = (input) => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(input);
  const hasLowercase = /[a-z]/.test(input);
  const hasNumber = /\d/.test(input);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(input);

  if (
    input.length < minLength ||
    !hasUppercase ||
    !hasLowercase ||
    !hasNumber ||
    !hasSpecialChar
  ) {
    return false;
  }

  return true;
};

/**
 * Checks if the input starts with a letter.
 *
 * @param input - The input to check.
 * @returns `true` if the input starts with a letter, `false` otherwise.
 */
export const startWithLetter: RuleCallBack = (input) => {
  if (!is_string(input) || input.length === 0) {
    return false;
  }
  const regex = /^[a-zA-Z]/;
  return regex.test(input);
};

/**
 * Checks if the input contains a letter.
 *
 * @param input - The input to check.
 * @returns `true` if the input contains a letter, `false` otherwise.
 */
export const containsLetter: RuleCallBack = (input) => {
  if (typeof input !== "string") {
    return false;
  }
  const letterRegex = /[a-zA-Z]/;
  return letterRegex.test(input);
};
/**
 * Checks if the input does not contain any of the specified characters.
 *
 * @param input - The input to check.
 * @param excludedChars - The characters to exclude,separatedby comma.
 * @returns `true` if the input does not contain any of the specified characters, `false` otherwise.
 */
export const excludes: RuleCallBack = (input, excludedChars) => {
  return !contains(input, excludedChars);
};
/**
 * Checks if the input is all uppercase.
 *
 * @param input - The input to check.
 * @param param - The locale to use.
 * @returns `true` if the input is all uppercase, `false` otherwise.
 */
export const upper: RuleCallBack = (input, param?: string) => {
  return input === input.toLocaleUpperCase();
};

/**
 * Checks if the input is all lowercase.
 *
 * @param input - The input to check.
 * @param param - The locale to use.
 * @returns `true` if the input is all lowercase, `false` otherwise.
 */
export const lower: RuleCallBack = (input: string, param?: string) => {
  return input === input.toLocaleLowerCase();
};
