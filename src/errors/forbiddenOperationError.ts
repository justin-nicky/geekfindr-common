import { CustomError } from './customError'

export class ForbiddenOperationError extends CustomError {
  statusCode = 403
  constructor() {
    super("You doen't have permission to perform this operation")
    Object.setPrototypeOf(this, ForbiddenOperationError.prototype)
  }
  serializeErrors() {
    return [{ message: "You doen't have permission to perform this operation" }]
  }
}
