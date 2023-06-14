import { RulesMessages } from "../../contracts";

export const en_messages: RulesMessages = {
  default: "This field is invalid",
  required: "This field is required",
  email: "Please enter a valid email address",
  maxlength: "The maximum number of allowed characters is: :arg0",
  minlength: "The minimum number of allowed characters is: :arg0",
  min: "The :field field must be greater than or equal to ':arg0'",
  max: "The :field field must be less than or equal to ':arg0'",
  string: "Please enter a string of characters",
  between: "The value of this field must be between ':arg0' and ':arg1'",
  startWith: "The :field field must start with ':arg0'",
  endWith: "The :field field must end with ':arg0'",
  contains: "The :field field must contain the value ':arg0'",
  in: "Please choose a correct value for the :field field",
  integer: "The :field field must be an integer",
  int: "The :field field must be an integer",
  number: "This field must be a number",
  numeric: "This field must be a number",
  file: "This field must be a file",
  url: "This field must be a valid URL",
  length: "The length of this field must be :arg0",
  len: "The length of this field must be :arg0",
  maxFileSize: "The file size must be less than :arg0.",
  modulo: "The value of :field field must be a multiple of :arg0",
  minFileSize: "The file size must be greater than :arg0.",
  size: "The size of this field must be less than or equal to :arg0",
  boolean: "This field must be a boolean (yes or no)",
  startWithUpper: "This field must start with an uppercase letter",
  startWithLower: "This field must start with a lowercase letter",
  nullable: "",
  password:
    "The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.",
  date: "This field must be a valid date",
  before: "The date must be before (:arg0)",
  after: "The date must be after (:arg0)",
  same: "This field must be identical to the value of the :arg0 field",
  requiredIf:
    "The :field field is required when the :arg0 field has the current value",
  requiredWhen:
    "The :field field is required when the :arg0 fields are present",
  phone: "This phone number seems to be invalid",
  time: "The :field field must be a valid time.",
  startWithLetter: "The :field field must start with a letter",
  excludes: "The :field field must not contain :arg0.",
  hasLetter: "This field must contain at least one letter",
  regex: "This field is invalid.",
  lower: "This field must be lowercase",
  upper: "This field must be uppercase",
  fileBetween: "File size must be between :arg0 and :arg1",
  stringBetween: "The length of this field must be between :arg0 and :arg1",
  only: "The format of this field is not accepted, as it contains non-allowed characters",
};
