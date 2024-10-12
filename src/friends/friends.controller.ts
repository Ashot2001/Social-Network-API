import { Controller, Post, Delete, Param, Get } from '@nestjs/common';
import { FriendshipsService } from './friends.service';

@Controller('friendships')
export class FriendshipsController {
  constructor(private readonly friendshipsService: FriendshipsService) {}

  @Post('accept/:requestId')
  async acceptFriendRequest(@Param('requestId') requestId: number) {
    return this.friendshipsService.acceptFriendRequest(Number(requestId));
  }

  @Post(':senderId/:receiverId')
  async sendFriendRequest(
    @Param('senderId') senderId: number,
    @Param('receiverId') receiverId: number,
  ) {
    return this.friendshipsService.sendFriendRequest(
      Number(senderId),
      Number(receiverId),
    );
  }

  @Delete(':requestId')
  async deleteFriendRequest(@Param('requestId') requestId: number) {
    return this.friendshipsService.deleteFriendRequest(Number(requestId));
  }

  @Get('requests/:userId')
  async getFriendRequests(@Param('userId') userId: number) {
    return this.friendshipsService.getFriendRequests(Number(userId));
  }
}
