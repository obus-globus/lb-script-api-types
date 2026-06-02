import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class KeyPairResponse$KeyPair extends Record {
    constructor(privateKey: string, publicKey: string)
    // private privateKey: string;
    // private publicKey: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    privateKey(): string;
    publicKey(): string;
    toString(): string;
}