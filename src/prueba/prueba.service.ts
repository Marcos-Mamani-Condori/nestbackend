import { Injectable } from '@nestjs/common';
import { Prueba } from "./entities/prueba.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPruebaDto } from './dto/createPrueba.dto';
@Injectable()
export class PruebaService {
    constructor(
        @InjectRepository(Prueba)
        private PruebaRepository: Repository<Prueba>
    ){}

    async createPrueba(Prueba: createPruebaDto): Promise<Prueba> {
        const New = this.PruebaRepository.create(Prueba);
        return this.PruebaRepository.save(New);
    }
    async getPruebasById(id: number): Promise<Prueba>{
        return this.PruebaRepository.findOneBy({id});
    }

    async getPruebasAllUsers(): Promise<Prueba[]>{
        return this.PruebaRepository.find();
    }
}
