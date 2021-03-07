import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field()
  @Column()
  firstName!: string;

  @Field({ nullable: true })
  @Column()
  lastName!: string;

  @Field({ nullable: true })
  @Column()
  nickName!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Field()
  @Column()
  password!: string;

  // @Field({ nullable: true })
  // @Column()
  // isActive!: boolean;
}
