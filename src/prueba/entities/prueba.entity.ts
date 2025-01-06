import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('prueba')
export class Prueba {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    Edad: number;
}