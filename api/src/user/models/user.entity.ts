import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany } from "typeorm";
import UserRole from "./user.interface";
// import { BlogEntryEntity } from "src/blog/model/blog-entry.entity";



@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true, })
    email: string;

    @Column({select: true})
    password: string;


    // default: UserRole.ADMIN
    @Column({ type: 'enum', enum: UserRole,default: UserRole.ADMIN })
    role: UserRole;

    // @Column({nullable: true})
    // profileImage: string;

    // @OneToMany(type => BlogEntryEntity, blogEntryEntity => blogEntryEntity.author)
    // blogEntries: BlogEntryEntity[];

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }
}