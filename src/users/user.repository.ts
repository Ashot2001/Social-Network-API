import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserEntities } from './entities/user.entities';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: UserEntities) {
    return this.prisma.user.create({
      data: {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
      },
    });
  }

  async findOne(where: { email?: string; id?: number }) {
    if (!where.email && !where.id) {
      throw new Error('You must provide either email or id to find a user.');
    }

    const user = await this.prisma.user.findUnique({
      where: {
        email: where.email || undefined,
        id: where.id || undefined,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  async update(id: number, data: Partial<UserEntities>) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email: email },
    });
  }

  async search(query: { firstName?: string; lastName?: string; age?: number }) {
    if (!query.firstName && !query.lastName && !query.age) {
      throw new Error('You must provide at least one search parameter.');
    }
    return this.prisma.user.findMany({
      where: {
        OR: [
          { firstName: { contains: query.firstName } },
          { lastName: { contains: query.lastName } },
          { age: query.age },
        ],
      },
      orderBy: {
        firstName: 'asc',
      },
      take: 100,
      skip: 0,
    });
  }

  async findUserWithFriends(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        friends: {
          where: {
            status: 'accepted',
          },
          include: {
            user2: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
            user1: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return {
      ...user,
      friends: user.friends.map((friend) => {
        const isUser1 = friend.user1Id === userId;
        return isUser1 ? friend.user2 : friend.user1;
      }),
    };
  }
}
