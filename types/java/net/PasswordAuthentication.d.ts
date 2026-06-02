import type { Object } from '../../java/lang/Object.d.ts'
export class PasswordAuthentication extends Object {
    constructor(arg0: string, arg1: string[])
    readonly password: string[];
    readonly userName: string;
    getPassword(): string[];
    getUserName(): string;
}