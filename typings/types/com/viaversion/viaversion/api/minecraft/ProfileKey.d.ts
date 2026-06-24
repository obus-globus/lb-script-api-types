import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProfileKey extends Record {
    constructor(expiresAt: number, publicKey: number[], keySignature: number[])
    // private expiresAt: number;
    // private keySignature: number[];
    // private publicKey: number[];
    equals(arg0: Object | null): boolean;
    expiresAt(): number;
    hashCode(): number;
    keySignature(): number[];
    publicKey(): number[];
    toString(): string;
}