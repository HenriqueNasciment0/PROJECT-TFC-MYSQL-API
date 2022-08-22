export default class CustomError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super();

    this.status = status;
    this.message = message;
  }
}
