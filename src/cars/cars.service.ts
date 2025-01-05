import { Injectable } from '@nestjs/common';
import { Car } from "./entities/car.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createCarDto } from "./dto/createCar.dto";
@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private CarsRepository: Repository<Car>
  ){}

  async CreateCar (Car: createCarDto): Promise<Car>{
    const newUser = this.CarsRepository.create(Car)
    return this.CarsRepository.save(newUser)
  }

  async getCarById(id: number): Promise<Car>{
    return this.CarsRepository.findOneBy({id})
  }
}








