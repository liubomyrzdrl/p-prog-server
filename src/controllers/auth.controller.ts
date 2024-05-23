import { FastifyReply, FastifyRequest } from "fastify";
import AuthService from "../services/authService";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { ICreateUserInput } from "../interfaces/auth/types.auth";
class AuthController {
  async authTest(req: FastifyRequest, reply: FastifyReply) {
    const user = await AuthService.getTestUser();
    reply.code(200).send({
      data: {
        hello: `Auth ${user?.username} email: ${user?.email}`,
      },
      message: "Test Auth route",
    });
  }

  async authRegister(
    req: FastifyRequest<{
      Body: ICreateUserInput;
    }>,
    reply: FastifyReply
  ) {
    const { username, email, password } = req.body;
    console.log("Body", username);
    const existedUser = await AuthService.getUserByEmail(email);

    if (existedUser) {
      return reply.code(401).send({
        message: "User already exists with this email",
      });
    }

    const hashedPassword = await argon2.hash(password);
    try {
      const newUser = await AuthService.createUser(
        username,
        email,
        hashedPassword
      );
      const token = jwt.sign(username, "sdfgsdfgsdfgsdfg");

       reply.code(200).send({user: newUser, token});
    } catch (err) { 
      return reply.code(500).send(err)
    }
  }

  async authLogin(req: FastifyRequest<{
    Body: ICreateUserInput;
  }>, reply: FastifyReply) {
    const { username, email, password } = req.body;
    const existedUser = await AuthService.getUserByEmail(email);

    const isValidPassword =  await argon2.verify(existedUser?.password as any, password);
    
    if(!existedUser || !isValidPassword) {
      return reply.code(401).send({
        message: 'Invalid email or password',
      });
    }

    reply.code(200).send({ 
      user : {
      email: existedUser.username,
      username:  existedUser.email,
    },
     token: jwt.sign(existedUser.username, "sdfgsdfgsdfgsdfg")
   })
  }
}

export default new AuthController();
