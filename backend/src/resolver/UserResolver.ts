import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { User } from "../entity/User";
import { UpdateUserInput } from "../types/UpdateUserInput";
import { UserInput } from "../types/UserInput";

@Resolver(User)
export class UserResolver {
  @Query(() => User)
  async emailOfUser(
    @Arg("email") { email }: UserInput
  ): Promise<User | undefined> {
    const emailOfUser = await User.findOne({ where: { email } });
    return emailOfUser; 
  }

  @Query(() => [User])
  async listOfUser(): Promise<User[]> {
    const listOfUser = await User.find({
      order: {
        id: "DESC",
      },
    });

    return listOfUser;
  }

  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User | null> {
    const emailUser = await User.findOne({ where: { email } });

    if (!emailUser) {
      throw new Error("Email not found!");
      return null;
    }

    const passwordUser = await User.findOne({ where: { password } });

    if (!passwordUser) {
      throw new Error("Password not found!");
      return null;
    }
    
    let user = emailUser

    return user;
  }

  @Mutation(() => User, { nullable: true })
  async logout(@Arg("email") email: string): Promise<User | null> {
    return null;
  }

  @Mutation(() => User)
  async createUser(
    @Arg("data") data: UserInput
    // { firstName, lastName, nickName, email, password }: UserInput
  ): Promise<User> {
    const createUser = User.create({
      ...data,
      // firstName,
      // lastName,
      // nickName,
      // email,
      // password,
    }).save();

    return createUser;
  }

  @Mutation(() => Boolean)
  async updateOfUser(
    @Arg("email") email: string,
    @Arg("data")
    { firstName, lastName, nickName }: UpdateUserInput
  ): Promise<Boolean> {
    const emailOfUser = await User.findOne({ where: { email } });

    if (!emailOfUser) {
      throw new Error("Email not found!");
    }

    await User.update(
      { email },
      {
        firstName,
        lastName,
        nickName,
      }
    );

    return true;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("email") email: string): Promise<Boolean> {
    await User.delete({ email });
    return true;
  }
}
