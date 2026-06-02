import type { AccountDetails } from '../../../../com/thealtening/api/response/AccountDetails.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Account extends Object {
    constructor()
    readonly info: AccountDetails;
    readonly limit: boolean;
    readonly password: string;
    readonly token: string;
    readonly username: string;
    equals(arg0: Object | null): boolean;
    getInfo(): AccountDetails;
    getPassword(): string;
    getToken(): string;
    getUsername(): string;
    isLimit(): boolean;
    toString(): string;
}