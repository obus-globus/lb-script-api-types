import type { AbstractHashFunction } from '../../../../com/google/common/hash/AbstractHashFunction.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { MessageDigest } from '../../../../java/security/MessageDigest.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MessageDigestHashFunction extends AbstractHashFunction implements Serializable {
    constructor(algorithmName: string, bytes: number, toString: string)
    constructor(algorithmName: string, toString: string)
    // private bytes: number;
    // private prototype: MessageDigest;
    // private supportsClone: boolean;
    // private toString: string;
    bits(): number;
    newHasher(): Hasher;
    newHasher(expectedInputSize: number): Hasher;
    // private readObject(stream: ObjectInputStream): void;
    toString(): string;
    writeReplace(): Object;
}