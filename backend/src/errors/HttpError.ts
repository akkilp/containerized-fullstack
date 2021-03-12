// Default Error is extended to customize its contents
// which can be further used in error handling middleware
class HttpError extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string) {
      super(message);
      this.status = status;
      this.message = message;
    }
  }
   
  export default HttpError;