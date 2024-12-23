import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({type: 'enum', enum: ['admin', 'user', 'contribuitor'], default: 'user' })
    role: string;
}