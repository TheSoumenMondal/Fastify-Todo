class ApiResponse {
  constructor(status, success, message, data = null) {
    this.status = status;
    this.success = success;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;
