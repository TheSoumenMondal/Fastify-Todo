import { StatusCodes } from "http-status-codes";
import BaseError from "./baseError.js";

class ValidationError extends BaseError {
  constructor(message = "This is not valid.") {
    super(message);
    (this.statusCode = StatusCodes.BAD_REQUEST),
      (this.name = "Validation Error");
  }
}

export default ValidationError;
