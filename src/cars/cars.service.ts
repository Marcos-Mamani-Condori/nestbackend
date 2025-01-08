import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from "./entities/car.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createCarDto } from "./dto/createCar.dto";
import {UsersService} from '../users/users.service';
@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private CarsRepository: Repository<Car>,
    private usersService: UsersService
  ){}

  async CreateCar (UserId: number, Car: createCarDto): Promise<Car>{
    const user = await this.usersService.getUsersById(UserId)
    if(!user){
      throw new NotFoundException(`User with ID ${UserId} not found`);
    }
    const newCar = this.CarsRepository.create({ ...Car, user});
    return this.CarsRepository.save(newCar)
  }

  async getCarById(id: number): Promise<Car>{
    return this.CarsRepository.findOneBy({id})
  }
}








