import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SecurityConfig extends Record {
    static generateSecretKey(): string;
    static isValid(paramsecretKey: string): boolean;
    constructor(secretKey: string)
    // private secretKey: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    secretKey(): string;
    toString(): string;
}