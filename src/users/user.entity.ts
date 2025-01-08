import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    name: string;

    @Column()
    phoneNumber: number;

    @Column({nullable: false})
    age: number;

    @Column({default: 'default@gmail.com'})
    email: string;

    @Column()
    password: string;

    @Column({ default: 'user' })
    role: string;
    
    @OneToMany(() => Car, (car) => car.user)
    cars: Car[];
}