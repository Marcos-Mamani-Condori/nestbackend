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

    @Column({ default: 'user' })
    role: string;
}