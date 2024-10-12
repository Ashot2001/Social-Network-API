import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login-dto';
import { UserEntities } from 'src/users/entities/user.entities';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<Omit<UserEntities, 'setPass' | 'validatePass'>> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await user.validatePass(pass))) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginDto) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
