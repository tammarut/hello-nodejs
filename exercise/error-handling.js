// Using promises or async/await
const doAsyncJos = async () => {
  try {
    const result1 = await job1();
    const result2 = await job2(result1);
    const result3 = await job3(result2);
    return await job5(result3);
  } catch (error) {
    console.log(error);
  } finally {
    await anywayDoThisJob();
  }
};

// ————————————————————————————————————————————————————————————————————————————————————
// Using built-in Error object =>> intuitive and clear information(StackTrace) to keep track root of error
class BaseError extends Error {
  name: string;
  httpCode: HttpStatusCode;
  isOperational: boolen;

  constructor(
    name: string,
    httpCode: HttpStatusCode,
    description: string,
    isOperational: boolen
  ) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

// Free to extend the BaseError
class APIError extends BaseError {
  constructor(
    name,
    httpCode = HttpStatusCode.INTERNAL_SERVER,
    isOperational = true,
    description = "internal server error"
  ) {
    super(name, httpCode, isOperational, description);
  }
}

// implemented some HTTP status codes for the sake of simplicity, but you are free to add more later.
export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}

// How to use it
const user = await User.getUserById(1)
if (user === null){
  throw new APIError('NOT_FOUND', HttpStatusCode.BAD_REQUEST, true, 'detailed explanation')
}
// ———————————————————————————————————————————————————————————————————————————————————————————
// Centralized Error-handling
try {
  userService.addNewUser(req.body)
    .then((newUser: User) => {
      res.status(200.json(newUser))
    })

}catch (error) {
  
}
