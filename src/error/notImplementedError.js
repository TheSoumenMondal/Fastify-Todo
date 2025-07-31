import { StatusCodes } from "http-status-codes";
import BaseError from "./baseError.js";

class NotImplementedError extends BaseError {
  constructor(message = "This feature is not implemented yet") {
    super(message);
    this.name = "NotImplementedError";
    this.statusCode = StatusCodes.NOT_IMPLEMENTED;
  }
}

export default NotImplementedError;
