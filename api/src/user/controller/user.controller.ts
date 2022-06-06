import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { UserService } from '../service/user.service';


@Controller('users')
export class UserController {

    constructor(private userService: UserService) { }

    @Post()
    create(@Body() user: User): Observable<User> {
        return this.userService.create(user);

    }
    @Get()
    findAll(): Observable<User[]> {
        return this.userService.findAll();

    }
    @Get(':id')
    findOne(@Param() param): Observable<User> {
        return this.userService.findOne(param.id);
    }
    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<User> {
        return this.userService.deleteOne(Number(id));

    }
    @Put(':id/update')
    updateOne(@Param('id') id: string): Observable<User> {
        return this.userService.updateOne(Number(id));
    }
}
