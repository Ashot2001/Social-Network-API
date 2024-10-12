import { Module } from '@nestjs/common';
import { FriendshipsService } from './friends.service';
import { FriendshipsController } from './friends.controller';
import { PrismaService } from 'src/prisma.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FriendshipsController],
  providers: [FriendshipsService, PrismaService],
})
export class FriendshipsModule {}
