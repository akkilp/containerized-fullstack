import HttpError from "./HttpError";

class ContentAlreadyExists extends HttpError {
  constructor() {
    super(409, `Content already exists`);
  }
}
 
export default ContentAlreadyExists;