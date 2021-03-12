import HttpError from "./HttpError";

class UserAlreadyExists extends HttpError {
  constructor(userName: string) {
    super(409, `Username ${userName} already exists`);
  }
}
 
export default UserAlreadyExists;