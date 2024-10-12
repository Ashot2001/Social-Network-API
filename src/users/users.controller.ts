import { Controller, Post, Body, Get, Param, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('search-users')
  search(
    @Query('firstName') firstName?: string,
    @Query('lastName') lastName?: string,
    @Query('age') age?: number,
  ) {
    return this.usersService.searchUsers({ firstName, lastName, age });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findUserWithFriends(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
}
