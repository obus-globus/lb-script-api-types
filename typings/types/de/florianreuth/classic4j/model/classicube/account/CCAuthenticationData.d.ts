import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CCAuthenticationData extends Record {
    constructor(arg0: string, arg1: string, arg2: string)
    constructor(username: string, password: string, previousToken: string, loginCode: string)
    // private loginCode: string;
    // private password: string;
    // private previousToken: string;
    // private username: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    loginCode(): string;
    password(): string;
    previousToken(): string;
    toString(): string;
    username(): string;
    withLoginCode(arg0: string): CCAuthenticationData;
}