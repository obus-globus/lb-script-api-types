import type { Record } from '../../../../java/lang/Record.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Property extends Record {
    constructor(arg0: string, arg1: string)
    constructor(name: string, value: string, signature: string)
    // private name: string;
    // private signature: string;
    // private value: string;
    equals(arg0: Object | null): boolean;
    hasSignature(): boolean;
    hashCode(): number;
    isSignatureValid(arg0: PublicKey): boolean;
    name(): string;
    signature(): string;
    toString(): string;
    value(): string;
}