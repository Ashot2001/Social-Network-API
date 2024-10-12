import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './user.repository';
import { PrismaModule } from 'src/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, PrismaModule],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
