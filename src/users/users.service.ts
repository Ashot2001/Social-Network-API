import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserEntities } from './entities/user.entities';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    await this.validateCreateUserDto(createUserDto);
    const newUser = new UserEntities(
      createUserDto.email,
      createUserDto.password,
      createUserDto.firstName,
      createUserDto.lastName,
      createUserDto.age,
    );
    await newUser.setPass();
    return this.userRepository.create(newUser);
  }

  private async validateCreateUserDto(createUserDto: CreateUserDto) {
    try {
      await this.userRepository.findOne({ email: createUserDto.email });
    } catch (error) {
      return;
    }
    throw new UnprocessableEntityException('Email already exists.');
  }

  async findOne(id: number) {
    return this.userRepository.findOne({ id });
  }

  async update(id: number, data: UpdateUserDto) {
    return this.userRepository.update(id, data);
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ email });
    return new UserEntities(
      user.email,
      user.password,
      user.firstName,
      user.lastName,
      user.age,
    );
  }

  async searchUsers(query: {
    firstName?: string;
    lastName?: string;
    age?: number;
  }) {
    return this.userRepository.search(query);
  }

  async findUserWithFriends(id: number) {
    return this.userRepository.findUserWithFriends(id);
  }
}
