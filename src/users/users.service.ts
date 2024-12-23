import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { createUserDto } from './dto/createuser.dto';
@Injectable()
export class UsersService {
    
    constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>  
    ){}

    async createUser (Usera: createUserDto): Promise<User> {
      if(!Usera.role){
        Usera.role = 'user';
    }
    const newUser = this.usersRepository.create(Usera);
    return this.usersRepository.save(newUser);
}}

