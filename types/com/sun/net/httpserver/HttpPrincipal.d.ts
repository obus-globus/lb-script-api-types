import type { Principal } from '../../../../java/security/Principal.d.ts'
import type { Subject } from '../../../../javax/security/auth/Subject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpPrincipal extends Object implements Principal {
    constructor(arg0: string, arg1: string)
    readonly realm: string;
    readonly username: string;
    equals(arg0: Object | null): boolean;
    getName(): string;
    getRealm(): string;
    getUsername(): string;
    hashCode(): number;
    implies(arg0: Subject): boolean;
    toString(): string;
}