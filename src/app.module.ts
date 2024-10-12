import { Module } from '@nestjs/common';
import { FriendshipsModule } from './friends/friends.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma.module';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from './logger';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number(),
        JWT_SECRET: Joi.string(),
        JWT_EXPIRATION: Joi.string(),
      }),
    }),

    PrismaModule,
    LoggerModule,
    AuthModule,
    UsersModule,
    FriendshipsModule,
  ],
})
export class AppModule {}
