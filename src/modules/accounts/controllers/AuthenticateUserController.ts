import { Request, Response } from "express";
import { container } from "tsyringe";
import AuthenticateUserService from "../services/AuthenticateUserService";

export default class AuthenticateUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const authenticateUserService = container.resolve(AuthenticateUserService);

    const authenticatedUser = await authenticateUserService.execute({
      email,
      password,
    });

    return res.status(200).json(authenticatedUser);
  }
}