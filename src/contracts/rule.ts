/**
 * List of Quickv rules grouped by Rule type
 */
export type Rule =
  | "required"
  | "email"
  | "maxlength"
  | "minlength"
  | "min"
  | "max"
  | "string"
  | "between"
  | "startWith"
  | "endWith"
  | "contains"
  | "in"
  | "integer"
  | "int"
  | "modulo"
  | "number"
  | "len"
  | "length"
  | "numeric"
  | "maxFileSize"
  | "minFileSize"
  | "size"
  | "file"
  | "boolean"
  | "startWithUpper"
  | "nullable"
  | "startWithLower"
  | "password"
  | "date"
  | "before"
  | "after"
  | "phone"
  | "url"
  | "time"
  | "startWithLetter"
  | "hasLetter"
  | "excludes"
  | "regex"
  | "lower"
  | "upper";
