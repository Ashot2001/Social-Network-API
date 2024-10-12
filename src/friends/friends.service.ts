import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Friendship } from './entities/friends.entities';

@Injectable()
export class FriendshipsService {
  constructor(private prisma: PrismaService) {}

  async sendFriendRequest(user1Id: number, user2Id: number): Promise<void> {
    await this.prisma.friendship.create({
      data: {
        user1Id,
        user2Id,
      },
    });
  }

  async acceptFriendRequest(requestId: number): Promise<void> {
    const friendship = await this.prisma.friendship.findUnique({
      where: { id: requestId },
    });

    if (!friendship) {
      throw new Error('Friendship request not found');
    }

    if (friendship.status !== 'pending') {
      throw new Error('Friendship request is not pending');
    }

    await this.prisma.friendship.update({
      where: { id: requestId },
      data: { status: 'accepted' },
    });
  }

  async deleteFriendRequest(requestId: number): Promise<void> {
    await this.prisma.friendship.delete({
      where: { id: requestId },
    });
  }

  async getFriendRequests(userId: number): Promise<Friendship[]> {
    return this.prisma.friendship.findMany({
      where: {
        AND: [{ user2Id: userId }, { status: 'pending' }],
      },
    });
  }
}
