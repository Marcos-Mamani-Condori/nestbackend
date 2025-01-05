import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Cars')
export class Car{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    model: string;

    @Column()
    brand: string;

    @Column()
    mileage: number;

    @Column({length: 500})
    description: string;
}
