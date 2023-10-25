import { MissingParamError } from "../errors/missignParamError";
import { badRequest } from "../helpers/httpHelper";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignupController {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = [
      "name",
      "email",
      "password",
      "passwordConfirmation",
    ];

    for (const field of requiredFields) {
      if (!httpRequest.body[field])
        return badRequest(new MissingParamError(field));
    }
  }
}
