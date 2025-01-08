import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => User, (user) => user.cars)
    user: User;
}
