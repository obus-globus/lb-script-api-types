import type { AbstractHashFunction } from '../../../../com/google/common/hash/AbstractHashFunction.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Mac } from '../../../../javax/crypto/Mac.d.ts'
export class MacHashFunction extends AbstractHashFunction {
    constructor(algorithmName: string, key: Key, toString: string)
    // private bits: number;
    // private key: Key;
    // private prototype: Mac;
    // private supportsClone: boolean;
    // private toString: string;
    bits(): number;
    newHasher(): Hasher;
    toString(): string;
}