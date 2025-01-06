import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Prueba } from './entities/prueba.entity';
import { PruebaService } from './prueba.service';
import { createPruebaDto } from './dto/createPrueba.dto';
@Controller('prueba')
export class PruebaController {
    constructor(
        private readonly pruebaService: PruebaService){}
    @Post()
    async CreatePrueba(@Body() Prueba: createPruebaDto): Promise<Prueba>{
        return this.pruebaService.createPrueba(Prueba);
    } 

    @Get(':id')
    async getPruebaById(@Param('id') id: number): Promise<Prueba>{
        return this.pruebaService.getPruebasById(id);
    }

    @Get()
    async getAllPruebas(): Promise<Prueba[]>{
        return this.pruebaService.getPruebasAllUsers();    
    }
}
