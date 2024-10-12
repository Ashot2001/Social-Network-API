import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsInt,
  IsPositive,
} from 'class-validator';
import { compare, hash } from 'bcryptjs';

export class UserEntities {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsInt()
  @IsPositive()
  age: number;

  constructor(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    age: number,
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  async setPass() {
    this.password = await hash(this.password, 10);
    return this.password;
  }

  async validatePass(hashPassword: string) {
    console.log(hashPassword);
    console.log(this.password);
    const isValidPassword = await compare(hashPassword, this.password);
    console.log(isValidPassword);
    return isValidPassword;
  }
}
