import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { Observable, from, of } from 'rxjs';
import { User } from 'src/user/models/user.interface';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    
    constructor(private readonly jwtService: JwtService){}

    generateJWT(user: User): Observable <string> {
        return from(this.jwtService.signAsync({user}));
    }

    hashPassword(password: string): Observable <string> {
        console.log('object' + password);
        return from<string>(bcrypt.hash(password, 12));

    }

    comparePasswords(newPassword: string, passwortHash: string): Observable<any>{
        // console.log(newPassword + 'in');
        // console.log(passwortHash+'hash');
        return from(bcrypt.compare(newPassword, passwortHash));
    }




}
