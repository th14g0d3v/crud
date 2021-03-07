import { Length } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType({ description: "Update user input" })
export class UpdateUserInput {
  @Field({ nullable: true })
  @Length(3, 255)
  firstName!: string;

  @Field({ nullable: true })
  @Length(3, 255)
  lastName!: string;

  @Field({ nullable: true })
  @Length(3, 255)
  nickName!: string;
}
