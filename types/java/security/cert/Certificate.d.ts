import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Certificate extends Object implements Serializable {
    constructor(arg0: string)
    // private hash: number;
    readonly type: string;
    equals(arg0: Object | null): boolean;
    getEncoded(): number[];
    getPublicKey(): PublicKey;
    getType(): string;
    hashCode(): number;
    toString(): string;
    verify(arg0: PublicKey): void;
    verify(arg0: PublicKey, arg1: Provider): void;
    verify(arg0: PublicKey, arg1: string): void;
    writeReplace(): Object;
}