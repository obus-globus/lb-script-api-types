import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Certificate extends Object {
    constructor()
    equals(arg0: Object | null): boolean;
    getEncoded(): number[];
    getPublicKey(): PublicKey;
    hashCode(): number;
    toString(): string;
    verify(arg0: PublicKey): void;
    verify(arg0: PublicKey, arg1: string): void;
}