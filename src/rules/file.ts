import { RuleCallBack } from "../contracts";

/**
 * Checks whether a given value is a `File` or `Blob` object.
 *
 * @param value - The value to check.
 * @returns `true` if the input value is a `File` or `Blob` object, `false` otherwise.
 */
export const isFile: RuleCallBack = (value) => {
  return value instanceof File || value instanceof Blob;
};

/**
 * Checks whether the size of a given `File` or `Blob` object is less than or equal to a given maximum size.
 *
 * @param input - The `File` or `Blob` object to check.
 * @param maxSize - The maximum size in bytes, specified as a string with an optional unit of measurement (B, KB, MB, or GB).
 * @returns `true` if the size of the input object is less than or equal to the maximum size, `false` otherwise.
 * @throws If the `maxSize` parameter is not in a valid format, an error is thrown.
 */
export const maxFileSize: RuleCallBack = (input, maxSize) => {
  if (isFile(input)) {
    const file = input as File;
    const sizeInBytes = file.size;
    let maxSizeInBytes: number;

    // Check if maxSize has a valid unit and extract the numeric value and unit
    const match = maxSize?.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
    if (!match) {
      throw new Error(
        "Invalid maxSize format. Please use valid format like '1KB', '1MB', etc."
      );
    }

    const numericValue = parseFloat(match[1]);
    const unit = match[3].toUpperCase();

    // Convert maxSize to bytes based on unit
    if (unit === "KB") {
      maxSizeInBytes = numericValue * 1024;
    } else if (unit === "MB") {
      maxSizeInBytes = numericValue * 1024 * 1024;
    } else if (unit === "GB") {
      maxSizeInBytes = numericValue * 1024 * 1024 * 1024;
    } else {
      maxSizeInBytes = numericValue; // If no unit specified, consider it as bytes
    }
    return sizeInBytes <= maxSizeInBytes;
  } else {
    return false;
  }
};
/**
 * A validation rule that checks if the size of a file is greater than or equal to the specified minimum size.
 *
 * @param input The input value to validate. Should be a File or Blob object.
 * @param minSize The minimum size of the file. Should be a string in the format '<number><unit>', where 'unit' can be one of 'B', 'KB', 'MB', 'GB'. For example, '1KB' represents 1 kilobyte, '2MB' represents 2 megabytes, etc.
 *
 * @returns A boolean value indicating whether the size of the file is greater than or equal to the specified minimum size.
 *
 * @throws An error if the minSize parameter is not a valid string in the format '<number><unit>'.
 */
export const minFileSize: RuleCallBack = (input, minSize) => {
  if (isFile(input)) {
    const file = input as File;
    const sizeInBytes = file.size;
    let minSizeInBytes: number;

    const match = minSize?.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
    if (!match) {
      throw new Error(
        "Invalid minSize format. Please use valid format like '1KB', '1MB', etc."
      );
    }

    const numericValue = parseFloat(match[1]);
    const unit = match[3].toUpperCase();

    // Convert minSize to bytes based on unit
    if (unit === "KB") {
      minSizeInBytes = numericValue * 1024;
    } else if (unit === "MB") {
      minSizeInBytes = numericValue * 1024 * 1024;
    } else if (unit === "GB") {
      minSizeInBytes = numericValue * 1024 * 1024 * 1024;
    } else {
      minSizeInBytes = numericValue; // If no unit specified, consider it as bytes
    }
    return sizeInBytes >= minSizeInBytes;
  } else {
    return false;
  }
};
