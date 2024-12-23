import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {UsersService} from './users.service';
import { createUserDto } from './dto/createuser.dto';
import { User } from './user.entity';
@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}

    @Post()
    async createUser(@Body() User: createUserDto): Promise<User> {
        return this.UsersService.createUser(User);
    }

    @Get(':id')
    async getUsersById(@Param('id') id: string): Promise <User> {
        const userId = parseInt(id, 10);
        return this.UsersService.getUsersById(userId);
    }

    @Get()
    async getAllUsers(): Promise <User[]> {
        return this.UsersService.getAllUsers();
    }
}
