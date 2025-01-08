import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Car } from "./entities/car.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
@Module({
  imports: [TypeOrmModule.forFeature([Car]), UsersModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
