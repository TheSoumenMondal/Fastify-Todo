import { StatusCodes } from "http-status-codes";
import BaseError from "./baseError.js";

class NotFoundError extends BaseError {
  constructor(message = "Resource not found") {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}


export default NotFoundError;