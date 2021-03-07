import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field({ nullable: true })
  @Length(3, 255)
  firstName!: string;

  @Field({ nullable: true })
  @Length(3, 255)
  lastName!: string;

  @Field({ nullable: true })
  @Length(3, 255)
  nickName!: string;

  @Field({ nullable: true })
  @IsEmail({}, { message: "Invalid email" })
  email!: string;

  @Field({ nullable: true })
  @Length(3, 255)
  password!: string;
}
