import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '../models/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { User } from '../models/user.interface'
import { from, Observable } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) { }


    create(user: User): Observable<User> {
        return from(this.userRepository.save(user));
    }

    findAll(): Observable<User[]> {
        return from(this.userRepository.find())
    }


    findOne(id: number): Observable<any> {
        return from(this.userRepository.query(`SELECT * FROM "public"."user_entity" WHERE id=${id}`));
    }
    updateOne(id: number): Observable<any> {
        return from(this.userRepository.query(`UPDATE "user_entity" SET name="tomas" WHERE id=${id}`)
        );
    }
    deleteOne(id: number): Observable<any> {
        return from(this.userRepository.delete(id));
    }
}
