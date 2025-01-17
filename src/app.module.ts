import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './cars/cars.module';
import { PruebaModule } from './prueba/prueba.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}']
  }),UsersModule, CarsModule, PruebaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}