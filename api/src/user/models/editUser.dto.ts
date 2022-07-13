import UserRole from "./user.interface";

export class editUserDto{
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    password?: string;
    role?: UserRole
}