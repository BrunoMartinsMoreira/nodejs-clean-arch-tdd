import { MissingParamError } from "../errors/missignParamError";
import { SignupController } from "./singnupController";

describe("SignupController", () => {
  describe("Validate http request body", () => {
    test("Should return 400 if no name is provided", async () => {
      const signupControllerSut = new SignupController();
      const httpRequest = {
        body: {
          email: "any@mail.com",
          password: "any_pwd",
          passwordConfirmation: "any_pwd",
        },
      };

      const httpResponse = await signupControllerSut.handle(httpRequest);
      expect(httpResponse.statusCode).toBe(400);
      expect(httpResponse.body).toEqual(new MissingParamError("name"));
    });

    test("Should return 400 if no email is provided", async () => {
      const signupControllerSut = new SignupController();
      const httpRequest = {
        body: {
          name: "any_name",
          password: "any_pwd",
          passwordConfirmation: "any_pwd",
        },
      };

      const httpResponse = await signupControllerSut.handle(httpRequest);
      expect(httpResponse.statusCode).toBe(400);
      expect(httpResponse.body).toEqual(new MissingParamError("email"));
    });

    test("Should return 400 if no password is provided", async () => {
      const signupControllerSut = new SignupController();
      const httpRequest = {
        body: {
          email: "any@mail.com",
          name: "any_pwd",
          passwordConfirmation: "any_pwd",
        },
      };

      const httpResponse = await signupControllerSut.handle(httpRequest);
      expect(httpResponse.statusCode).toBe(400);
      expect(httpResponse.body).toEqual(new MissingParamError("password"));
    });

    test("Should return 400 if no confirmPassword is provided", async () => {
      const signupControllerSut = new SignupController();
      const httpRequest = {
        body: {
          email: "any@mail.com",
          password: "any_pwd",
          name: "any_name",
        },
      };

      const httpResponse = await signupControllerSut.handle(httpRequest);
      expect(httpResponse.statusCode).toBe(400);
      expect(httpResponse.body).toEqual(
        new MissingParamError("passwordConfirmation"),
      );
    });
  });
});
