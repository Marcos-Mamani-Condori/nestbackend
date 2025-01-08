import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { Car } from "./entities/car.entity";
import { CarsService } from './cars.service';
import { createCarDto } from './dto/createCar.dto';
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService){}

  @Post(':userId')
  async createCar(@Param('userId') userId: string,@Body() Car: createCarDto): Promise<Car>{
    const userIdNumber = parseInt(userId, 10)
    return this.carsService.CreateCar(userIdNumber, Car);
  }

  @Get(':id')
  async getCarById(@Param('id') id: string): Promise<Car>{
    const CarId = parseInt(id, 10)
    return this.carsService.getCarById(CarId)
  }
}
